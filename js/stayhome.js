/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('stayhome', ['firebase'])

.service('stayhome', ['$firebaseArray', function($firebaseArray){
    var ref = firebase.database().ref().child('activities');
    var activities = $firebaseArray(ref);
    var stayhome = {
        'activities': activities
    }
    
    return stayhome;
}]);
