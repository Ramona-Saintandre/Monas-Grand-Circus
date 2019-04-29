function ExpandOnFocus() {
    return {
        restrict: "A",
        // scope: {
        //     count: '='
        // },
        link: function($scope, $element, $attrs) {
            let height = 50;

            $scope.$watch($attrs.count, function(value) {
                height = value;
                console.log(value);
            });
            
            $element.on("focus", () => {
                console.log($scope, $element, $attrs);

                console.log(height);
                
                $element.css("height", height + 'px');
            });
            $element.on("blur", () => {
                $element.css("height", "");
            });
        }
    };
};

angular
.module('InputExample')
.directive('expandOnFocus', ExpandOnFocus);