mainApp.service("EmployeeCareerProfileService", ["$http", function ($http) {

    var BASE_LINK = "http://localhost:8080/api/resource/career";

    this.getDistinctStation = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getDistinctStation"
        })
    }

    this.getCareerProfileByStation = function (station) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getCareerProfileByStation/" + station
        })
    }

    this.getAllCareerProfile = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getAllCareerProfile"
        })

    }

    this.countAllEmployee = function (station) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/countAllEmployee/" + station 
        })

    }
}])