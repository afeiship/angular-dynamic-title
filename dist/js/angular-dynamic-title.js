(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('dynamicTitle', dynamicTitle);

  /** @ngInject */
  function dynamicTitle($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: function (scope, element) {

        var listener = function (event, toState) {

          var title = 'Default title';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function () {
            element.text(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }

})();