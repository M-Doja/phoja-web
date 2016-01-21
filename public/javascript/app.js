angular.module('Phoja', ['ui.router', 'ngMaterial']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  //   .state('BlogHome', {
  //   url: "/",
  //   templateUrl: '/templates/BlogHome.html',
  //   controller: 'AddBlogController',
  //   controllerAs: "vm"
  // }).state('AddBlog', {
  //   url: "/blog_add",
  //   templateUrl: '/templates/AddBlog.html',
  //   controller: 'AddBlogController',
  //   controllerAs: "vm"
  // })
    .state('Landing', {
    url: "/",
    templateUrl: '/templates/Landing.html',
    controller: 'MainController',
    controllerAs: "vm"
  }).state('Advisory', {
    url: "/advisory",
    templateUrl: '/templates/Advisory.html',
    controller: 'MainController',
    controllerAs: "vm"
  }).state('Craft', {
    url: "/craft",
    templateUrl: '/templates/Craft.html',
    controller: 'MainController',
    controllerAs: "vm"
  }).state('Music', {
    url: "/music",
    templateUrl: '/templates/Music.html',
    controller: 'MainController',
    controllerAs: "vm"
  }).state('Websites', {
    url: "/websites",
    templateUrl: '/templates/Websites.html',
    controller: 'MainController',
    controllerAs: "vm"
  })
$urlRouterProvider.otherwise('/')
});
