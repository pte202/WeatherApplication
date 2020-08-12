namespace Weather.Api.Configuration.v1
{
    public static class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = Root + "/" + Version;

        public static class Weather
        {
            public const string Get = Base + "/weather";
        }
    }
}
