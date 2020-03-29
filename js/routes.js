angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page9',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tutorial', {
    url: '/tutorial',
    templateUrl: 'templates/tutorial.html',
    controller: 'tutorialCtrl'
  })

  .state('page', {
    url: '/page11',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('question', {
    url: '/question',
    templateUrl: 'templates/question.html',
    controller: 'questionCtrl'
  })

  .state('menu.mentalHealthSurvey', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mentalHealthSurvey.html',
        controller: 'mentalHealthSurveyCtrl'
      }
    }
  })

  .state('menu.resultMHS', {
    url: '/resultmhs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resultMHS.html',
        controller: 'resultMHSCtrl'
      }
    }
  })

  .state('communicate', {
    url: '/communicate',
    templateUrl: 'templates/communicate.html',
    controller: 'communicateCtrl'
  })

  .state('wait', {
    url: '/wait',
    templateUrl: 'templates/wait.html',
    controller: 'waitCtrl'
  })

  .state('menu.video', {
    url: '/video',
    views: {
      'side-menu21': {
        templateUrl: 'templates/video.html',
        controller: 'videoCtrl'
      }
    }
  })

  .state('menu.activities', {
    url: '/activities',
    views: {
      'side-menu21': {
        templateUrl: 'templates/activities.html',
        controller: 'activitiesCtrl'
      }
    }
  })

  .state('menu.schedule', {
    url: '/schedule',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu.editActivity', {
    url: '/editactivity',
	params: {
		activity: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/editActivity.html',
        controller: 'editActivityCtrl'
      }
    }
  })

  .state('today', {
    url: '/today',
    templateUrl: 'templates/today.html',
    controller: 'todayCtrl'
  })

  .state('menu.friends', {
    url: '/friends',
    views: {
      'side-menu21': {
        templateUrl: 'templates/friends.html',
        controller: 'friendsCtrl'
      }
    }
  })

  .state('message', {
    url: '/message',
    templateUrl: 'templates/message.html',
    controller: 'messageCtrl'
  })

  .state('menu.prevent', {
    url: '/prevent',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prevent.html',
        controller: 'preventCtrl'
      }
    }
  })

  .state('awards', {
    url: '/awards',
    templateUrl: 'templates/awards.html',
    controller: 'awardsCtrl'
  })

$urlRouterProvider.otherwise('/tutorial')


});