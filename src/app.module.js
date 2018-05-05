import angular from "angular";
import uirouter from "angular-ui-router";
import AppConfig from "./app.config";
import Core from "./Core/core.module";
import Container from "./Components/Container/container.module";

angular.module("app", [
  uirouter,
  Core,
  Container
]).config(
  AppConfig
);
