'use strict';
angular.module('ngUser')
    .controller('GithubCtrl', function ($scope, GithubService) {
        GithubService.getUsers().success(function (users) {
            $scope.users = users;
        });
    });
