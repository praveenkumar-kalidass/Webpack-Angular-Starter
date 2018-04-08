const AppConfig = [
  "$stateProvider",
  "$urlRouterProvider",
  ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
}];

export default AppConfig;
