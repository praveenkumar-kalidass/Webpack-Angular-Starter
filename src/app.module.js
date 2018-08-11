import AppConfig from "./app.config";
import Core from "./Core/core.module";
import Container from "./Components/Container/container.module";

angular.module("app", [
  Core,
  Container
]).config(
  AppConfig
);
