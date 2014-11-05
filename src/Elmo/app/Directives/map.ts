/// <reference path="../_all.d.ts" />
module App.Directives {
    "use strict";

    export interface IMapScope extends ng.IScope {
    }

    export class Map implements ng.IDirective {
        public injection(): any[] {
            return ["dataService", Map];
        }
        static $inject = ["dataService"];
        public restrict: string;
        public replace: boolean;
        public template: string;
        public scope: any;
        public link: (scope: IMapScope, element: JQuery, attributes: any) => void;
        private map: L.Map;

        constructor(private dataService: App.Services.IDataService) {
            this.restrict = "E";
            this.replace = true;
            this.template = "<div class='map'><div id='elmoMap'></div></div>";
            this.link = (scope, element, attributes) => this.linkFn(scope, element, attributes);
            this.scope = { location: '=ngModel' };
            this.map = null;
        }

        linkFn(scope: IMapScope, element: JQuery, attributes: any) {
            this.initMap();
            scope.$watch("location", (location, oldLocation) => {
            });
        }

        private initMap() {
            this.dataService.loadData().then((geojson) => {
                var geoLayer = L.mapbox.featureLayer(geojson);
                L.mapbox.accessToken = "pk.eyJ1IjoiZ29sZG5hcm1zIiwiYSI6IkZKWHd2ZzgifQ.spTj9MJpcjX57EbN2fUDqQ";
                this.map = L.mapbox.map("elmoMap", "goldnarms.k531eg9d", {
                    attributionControl: false,
                    infoControl: true,
                    maxZoom: 18
                }).setView(new L.LatLng(101, 0.846), 5);
                geoLayer.addTo(this.map);
            });
        }

        private updateLocation(center, zoom) {
            
        }
    }
}