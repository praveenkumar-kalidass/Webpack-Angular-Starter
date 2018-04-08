import angular from "angular";
import uirouter from "angular-ui-router";
import ContainerRoute from "./Container.routes";
import ContainerController from "./Container.controller";

const Container = angular.module("app.container", [
  uirouter
]).config(
  ContainerRoute
).controller(
  'ContainerController',
  ContainerController
).name;

export default Container;
