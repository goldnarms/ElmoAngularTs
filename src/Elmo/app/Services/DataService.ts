module App.Services {
    "use strict";

    export interface IDataService {
        loadData():ng.IHttpPromise<any>;
    }

    export class DataService implements IDataService {
        static $inject = ["$http"];
        public injection(): any[] {
            return ["$http", DataService];
        }

        constructor(private $http: ng.IHttpService) {
            
        }

        public loadData(): ng.IHttpPromise<any> {
            return this.$http.get("./data/data.geojson");
        }
    }
} 