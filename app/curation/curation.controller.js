angular.
    module('curation').
    controller('CurationController', function ($scope, $http) {
        $http.get('data/items.json').then(function (response) {
            $scope.items = response.data;
            //$scope.tags = _.uniq(_.flatten(_.pluck(response.data, 'tags')));
        });

        $scope.itemClass = function (item) {
            var classes = [item.type.toLowerCase()];
            if (item.imageUrl) {
                classes.push('has-image');
            }
            if (item.display) {
                classes.push(item.display);
            }
            return classes.join(' ');
        }
    });

