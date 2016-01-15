angular.module('BlogApp').controller('MainBlogController', function($http){
  var vm = this;
  vm.date =  Date();
  vm.newBlog = {};
  // Testing
  console.log('hey I work');

  vm.blogs = [];
  // Testing
  console.log(vm.blogs);
  console.log(vm.newBlog);

  vm.blogs.push(vm.newBlog);
  // Testing
  console.log(vm.blogs);

  vm.addBlog = function(){
    vm.blogs.push(vm.newBlog);
    console.log(vm.newBlog);
    $http.post('https://brilliant-fire-3806.firebaseio.com/.json', vm.newBlog).success(function(res){
      $state.go('BlogHome');
    });
  }
  
  vm.getBlogs = function(){
    $http.get("https://brilliant-fire-3806.firebaseio.com/.json").success(function(res){
        vm.blogs = [];
        console.log(vm.blogs);
        for(var prop in res){
          res[prop]._id = prop;
          vm.blogs.push(res[prop]);
        }
    });
  }
vm.getBlogs();
vm.deleteBlog = function(post){
  $http.delete("https://brilliant-fire-3806.firebaseio.com/" + post._id + "/.json").success(function(){
    vm.getBlogs();
  });
}

});
