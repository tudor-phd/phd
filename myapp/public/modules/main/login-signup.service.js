angular.module('myApp').service(
  "DaysOffService",
  function ($http, $q, $cookies, apiURL) {
    // Return public API.
    return ({
      getDaysOff: getDaysOff,
      deleteDayOff: deleteDayOff,
      addDayOff: addDayOff,
      updateDayOff: updateDayOff
    });
    // I get all of the vacations in the remote collection.
    function getDaysOff() {
      var accessToken = localStorage.getItem('accessToken');
      var userId = localStorage.getItem('userId');
      var request = $http({
        method: "get",
        url: apiURL + '/users/' + userId + '/schoolyear/all/vacations',
      });
      return (request.then(handleSuccess, handleError));
    }

    function deleteDayOff(schoolyearId, vacationId) {
      var accessToken = localStorage.getItem('accessToken');
      var userId = localStorage.getItem('userId');
      var request = $http({
        method: "delete",
        url: apiURL + '/users/' + userId + '/schoolyears/' + schoolyearId + '/vacations/' + vacationId,
      });
      return (request.then(handleSuccess, handleError));
    }

    function addDayOff(schoolyearId, startDate, endDate, name, comment) {
      var accessToken = localStorage.getItem('accessToken');
      var userId = localStorage.getItem('userId');
      var request = $http({
        method: "post",
        url: apiURL + '/users/' + userId + '/schoolyears/' + schoolyearId + '/vacations',
        data: {
          name: name,
          startDate: startDate,
          endDate: endDate,
          comments: comment
        }
      });
      return (request.then(handleSuccess, handleError));
    }

    function updateDayOff(vacationId, schoolyearId, startDate, endDate, name, comment) {
      var accessToken = localStorage.getItem('accessToken');
      var userId = localStorage.getItem('userId');
      var request = $http({
        method: "put",
        url: apiURL + '/users/' + userId + '/schoolyears/' + schoolyearId + '/vacations/' + vacationId,
        data: {
          name: name,
          startDate: startDate,
          endDate: endDate,
          comments: comment,
        }
      });
      return (request.then(handleSuccess, handleError));
    }

    // ---
    // PRIVATE METHODS.
    // ---
    // I transform the error response, unwrapping the application dta from
    // the API response payload.
    function handleError(response) {
      // The API response from the server should be returned in a
      // nomralized format. However, if the request was not handled by the
      // server (or what not handles properly - ex. server error), then we
      // may have to normalize it on our end, as best we can.
      if (!angular.isObject(response.data) || !response.data.message
      ) {
        return ($q.reject("An unknown error occurred."));
      }
      // Otherwise, use expected error message.
      return ($q.reject(response.data.message));
    }

    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess(response) {
      return (response.data);
    }
  }
);
