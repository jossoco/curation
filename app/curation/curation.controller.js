angular.
    module('curation').
    controller('CurationController', function ($scope, $http) {
        $http.get('data/items.json').then(function (response) {
            $scope.items = response.data;
            $scope.selectedItems = response.data;

            var tags = _.uniq(_.flatten(_.pluck(response.data, 'tags')));
            $scope.tags = _.map(tags, function (tag) {
                return {
                    name: tag,
                    selected: false
                };
            });
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

        $scope.selectTag = function (tag) {
            tag.selected = !tag.selected;

            var selectedTags = _.pluck(_.filter($scope.tags, function (tag) { return tag.selected; }), 'name');
            if (selectedTags.length == 0) {
                $scope.selectedItems = $scope.items;
            } else {
                $scope.selectedItems = _.filter($scope.items, function (item) {
                    return _.intersection(item.tags, selectedTags).length > 0;
                });
            }
        }
    });

