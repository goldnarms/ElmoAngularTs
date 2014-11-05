/// <reference path="../_all.d.ts" />

module App.Home {
    "use strict";

    export interface IHomeController {
        message: string;
    }

    export class HomeController implements IHomeController {
        public message: string;
        public static $inject = ["$scope"];

        constructor(private $scope: any) {
            this.init();
        }

        private init(): void {
            this.message = "Hello world from app!";
        }
    }
}