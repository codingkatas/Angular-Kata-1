/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata1 */

namespace('kata1.home');

kata1.home.HomeController = function ($scope) {

    var todoList = [
        {
            subject : 'Take the dishes',
            done    : false
        },
        {
            subject : 'Do my homework',
            done    : false
        },
        {
            subject : 'Cook dinner',
            done    : false
        }
    ];

    $scope.todoList = todoList;

};

