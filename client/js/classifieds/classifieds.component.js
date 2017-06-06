// var app = angular.module('app', []);
(function() {
  'use strict'

  angular.module('app')
  .component('classifieds', {
    controller: controller,
    templateUrl: './js/classifieds/classifieds.html'
  })

  controller.$inject = ['classService', '$state']

  function controller(classService, $state) {
    const vm = this

    vm.$onInit = onInit
    // vm.togglePostForm = togglePostForm
    vm.toggleEdit = toggleEdit
    vm.getAds = getAds
    vm.getClass = getAds
    vm.postClass = postClass
    vm.updateClass = updateClass
    vm.deleteClass = deleteClass

    function onInit() {
      getAds()
    }

    function getAds() {
      classService.getClass()
      .then(classifieds => {
        vm.classifieds = classifieds
      })
    }

    function togglePostForm() {
      vm.newPost = !vm.newPost
    }

    function toggleEdit() {
    vm.showClass = vm.showClass ? !vm.showClass : true
    }

    function postClass() {
      console.log('getting here')
      classService.postClass(vm.post)
      .then(post => {
        })
      // vm.posts.push(vm.post)
      // vm.togglePostForm()
      delete vm.post
      $state.reload()
    }

    function updateClass(post) {
      console.log('updating the thing in das components', vm.editClass)
      classService.updateClass(post.id, vm.editClass)
      .then(post => {
        // delete vm.item
        // onInit()
        })
      delete vm.post
      $state.reload()
    }

    function deleteClass(post) {
      classService.deleteClass(post.id)
      .then(classifieds => {
        $state.reload
      })
    }
  }
}());
