import angular from "angular";
import uirouter from "angular-ui-router";
import ContainerRoutes from "./container.routes";
import ContainerController from "./container.controller";

const Container = angular.module("app.container", [
    uirouter
  ])
  .config(
    ContainerRoutes
  ).controller(
    "ContainerController",
    ContainerController
  ).name;

export default Container;
