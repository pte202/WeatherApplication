using AspNetCoreRateLimit;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Weather.Api.Configuration.AppSettings;
using Weather.Api.Configuration.Swagger;
using Weather.Api.Services;

namespace Weather.Api
{
    public class Startup
    {
        public Startup(IHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<AppSettings>(Configuration);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Payment Gateway API",
                    Description = "An example Payment Gateway API that processes card payments",
                });

                c.ExampleFilters();

                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            services.AddSwaggerExamplesFromAssemblyOf<Startup>();

            services.AddControllers();

            var assembly = typeof(Program).GetTypeInfo().Assembly;
            services.AddAutoMapper(assembly);

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", 
                    builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            services.AddHttpClient();

            services.AddResponseCaching();

            services.AddMemoryCache();

            services.Configure<IpRateLimitOptions>((options) =>
                options.GeneralRules = new List<RateLimitRule>()
                {
                    new RateLimitRule()
                    {
                        Endpoint = "*",
                        Limit = 1000,
                        Period = "5m"
                    },
                    new RateLimitRule()
                    {
                        Endpoint = "*",
                        Limit = 200,
                        Period = "10s"
                    },
                }
            );

            services.AddScoped<IWeatherService, WeatherService>();

            services.AddSingleton(Configuration);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var swaggerConfiguration = new SwaggerConfiguration();

            Configuration.GetSection(nameof(swaggerConfiguration)).Bind(swaggerConfiguration);

            app.UseSwagger(config => { config.RouteTemplate = swaggerConfiguration.JsonRoute; });

            app.UseSwaggerUI(config =>
            {
                config.SwaggerEndpoint(swaggerConfiguration.UiEndpoint, swaggerConfiguration.Description);
            });

            app.UseCors("CorsPolicy");
            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
