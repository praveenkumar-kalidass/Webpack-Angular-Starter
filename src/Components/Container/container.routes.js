const ContainerRoutes = ['$stateProvider', ($stateProvider) => {
  $stateProvider.state('Container', {
    url: '/',
    template: require('./templates/Container.html'),
    controller: 'ContainerController',
    controllerAs: 'vm'
  });
}];

export default ContainerRoutes;
