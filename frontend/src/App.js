import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styles from "./App.module.css";

import HomePage from "./components/home/HomePage";
import WeatherPage from "./components/weather/WeatherPage";
import NotFoundPage from "./components/navigation/NotFoundPage";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={HomePage} />
          <Route path="/weather" component={WeatherPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
