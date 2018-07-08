(function (angular) {
  'use strict';

  angular
    .module('myApp', [ 'ngAnimate', 'vAccordion' ])

    .controller('MainController', function ($scope) {

      

      $scope.panesB = [
        {
          id: 'pane-1b',
          header: 'Value Added Services',
          content: '',
          
          subpanes: [
            {
              id: 'subpane-1a',
              header: 'Bangkok',
              content: '1)SAFARI WORLD & MARINE PARK WITH LUNCH  BDT3600   . 2) DREAM WORLD & SNOW TOWN WIYH LUNCH BDT  3600. 3) CHAOPHARAYA RIVER DINNER CRUISE . 4) DAMNERNSADUAK FLOATING MARKET . 5) GRAND PALACE TOUR . 6) SIAM OCEAN WORLD + 5DTHEATRE + GBB . 7) MADAM TUSSAUDS WAX MUSEAM . '
            },


            
           {
              id: 'subpane-2a',
              header: 'Chiang Mai',
              content: '1) DOI INTHANON NATIONAL PARL TOUR WITH LUNCH . 2) GOLDEN TRIANGLE TOUR WITH LUNCH',
              
            },




            {
              id: 'subpane-3a',
              header: 'Koh Samui',
              content: '1) SAFARI ADVENTURE TOUR WITH LUNCH . 2) ANGTHONG NATIONAL MARINE PARK WITH LUNCH',
              
            },






            {
              id: 'subpane-4a',
              header: 'Hua Hin',
              content: '1) PA-LA-U WATERFALL ELEPHANT RIDING AND KAYAKING WITH LUNCH . 2) SANTORINI PARK WATERVENTURES',
              
            },






           {
              id: 'subpane-5a',
              header: 'Pattaya',
              content: '1) MILLION YEAR STONE PARK & CROCODILE FARM . 2) UNDER WATER WORLD . 3) ALCAZAR SHOW . 4) RIPLEYS BELIEVE IT OR NOT',
              
            },






            {
              id: 'subpane-6a',
              header: 'Phuket',
              content: '1) JAMES BOND ISLAND TOUR WITH LUNCH. 2) PHI PHI ISLAND TOUR WITH LUNCH. 3) FANTASIA SHOW',
              
            }
          ]
        },
        
        {
          id: 'pane-3b',
          header: 'Combo Offer',
          content: '',

          subpanes: [
            {
              id: 'subpane-1b',
              header: 'Pattaya Combo',
              content: '1) 2 NIGHTS BANKOK 2) 2 NIGHTS PATTAYA . 3) DAILY BREAKFAST . 4) ROUND TRIP TRANSFER . 5) CORAL ISLAND TOUR WITH LUNCH . 6) BANGKOK CITY TOUR'
            },

        
            {
              id: 'subpane-2b',
              header: 'Hua Hin Combo',
              content: '1) 2 NIGHTS BANKOK 2) 2 NIGHTS HUA HIN . 3) DAILY BREAKFAST . 4) ROUND TRIP TRANSFER . 5) FULL DAY HUA HIN TOUR . 6) BANGKOK CITY TOUR'
            },




           
            {
              id: 'subpane-3b',
              header: 'Krabi Combo',
              content: '1) 2 NIGHTS PHUKET 2) 1 NIGHT PHI PHI ISLAND . 3) DAILY BREAKFAST . 4) ROUND TRIP TRANSFER . 5) JAMES BOND ISLAND TOUR WITH LUNCH . 6) 1 NIGHT KRABI'
            },




           
            {
              id: 'subpane-4b',
              header: 'Phuket Combo',
              content: '1) 2 NIGHTS KRABI 2) 1 NIGHT PHI PHI ISLAND . 3) DAILY BREAKFAST . 4) ROUND TRIP TRANSFER . 5) FOUR ISLAND TOUR WITH LUNCH . 6) 1 NIGHT PHUKET',
              
            }
          ]
        }
      ];

      $scope.expandCallback = function (index, id) {
        console.log('expand:', index, id);
      };

      $scope.collapseCallback = function (index, id) {
        console.log('collapse:', index, id);
      };

      $scope.$on('accordionA:onReady', function () {
        console.log('accordionA is ready!');
      });

    });

})(angular);
