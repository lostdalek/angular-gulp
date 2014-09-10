angular.module('ngUser', [])
    .factory('GithubService', function ($http) {
        return {
            getUsers: function () {
                return $http.get('https://api.github.com/users')
            }
        }
    })
