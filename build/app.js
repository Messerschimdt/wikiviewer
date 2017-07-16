var wiki = angular.module('wiki', []);

wiki.controller('wikiView', function($scope, $http) {
  $scope.textInput = '';
  $scope.$watch('textInput', function() {
    fetch();
  })
  function fetch() {

    $http.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $scope.textInput + '&format=json&origin=*').then(function successCallback(response) {
      $scope.wikidata = response.data;

      $scope.filterData = [];

    if ($scope.textInput.length !==0){
      for (var i = 0; i < $scope.wikidata[1].length; i++) {
        $scope.filterData.push({title: $scope.wikidata[1][i], desc: $scope.wikidata[2][i], link: $scope.wikidata[3][i]
        });
      }

    }
    }) //endofthen
  } //end of fetch
  $scope.clickSearch = fetch();
})
