import angular from "angular";
import uirouter from "angular-ui-router";
import AppConfig from "./app.config";
import Container from "./Components/Container/Container.module";

angular.module("app", [
  uirouter,
  Container
]).config(AppConfig);
