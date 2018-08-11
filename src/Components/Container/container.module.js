import ContainerRoutes from "./container.routes";
import ContainerController from "./container.controller";

const Container = angular.module(
    "app.container",
    []
  )
  .config(
    ContainerRoutes
  ).controller(
    "ContainerController",
    ContainerController
  ).name;

export default Container;
