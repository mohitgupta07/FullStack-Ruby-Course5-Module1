/**
 * Created by mohit on 14-Nov-16.
 */
(function () {
    'use strict';
    
    angular.module('LunchCheck',[])
        .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController ($scope) {
          //  LunchCheckController.$inject=['$scope'];
	$scope.ItemLength=0;	
        $scope.abc="";
        $scope.list= function()
        {
            var lists=$scope.items.split(",");
            for(var i=0;i<lists.length;i++)
            {
                if(lists[i]==undefined || lists[i]=="" || lists[i]==null)
                {
                    lists.splice(i,1);
                }
            }
             $scope.ItemLength=lists.length;
           $scope.abc=lists.toString();
        return lists;
        };
            $scope.check=function()
            {
                if($scope.ItemLength==0)
                {
                       $scope.myColor="red";
                   $scope.myAns="Please enter data first";
                   return 0;
                
                }
                if($scope.ItemLength<=3)
                {
                   $scope.myColor="green";
                   $scope.myAns="Enjoy!";
                
                }
                else 
                {
                    $scope.myColor="green";
                   $scope.myAns="Too much!";
                
                }
                return 0;
            };
        }
})();