System.register(['angular2/core', './column.component', './wall.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, column_component_1, wall_service_1;
    var Wall;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (column_component_1_1) {
                column_component_1 = column_component_1_1;
            },
            function (wall_service_1_1) {
                wall_service_1 = wall_service_1_1;
            }],
        execute: function() {
            Wall = (function () {
                function Wall(wallService) {
                    this.wallService = wallService;
                }
                Wall.prototype.ngOnInit = function () {
                    this.columns = this.wallService.getPhotos();
                };
                Wall.prototype.columnLoaded = function (container) {
                    console.log(container);
                    var container = container;
                    setInterval(function () {
                        //container.style.left = (Number(container.style.left.substring(0, container.style.left.length-2)) + 3).toString() + "px";
                        //console.log(container.offsetLeft);
                    }, 17);
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [column_component_1.Column],
                        providers: [wall_service_1.WallService],
                        template: "\n            <column *ngFor=\"#column of columns\" [imageList]=\"column\" [loadFunction]=\"columnLoaded\"></column>\n    "
                    }), 
                    __metadata('design:paramtypes', [wall_service_1.WallService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUdJLGNBQXFCLFdBQXVCO29CQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtnQkFFNUMsQ0FBQztnQkFFRCx1QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCwyQkFBWSxHQUFaLFVBQWMsU0FBUztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMxQixXQUFXLENBQUM7d0JBQ1IsMEhBQTBIO3dCQUMxSCxvQ0FBb0M7b0JBQ3hDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQTNCTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxNQUFNO3dCQUNqQixVQUFVLEVBQUcsQ0FBQyx5QkFBTSxDQUFDO3dCQUNyQixTQUFTLEVBQUcsQ0FBQywwQkFBVyxDQUFDO3dCQUN6QixRQUFRLEVBQUcsNEhBRVY7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBcUJGLFdBQUM7WUFBRCxDQUFDLEFBbkJELElBbUJDO1lBbkJELHVCQW1CQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbHVtbn0gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50J1xuXG5pbXBvcnQge1dhbGxTZXJ2aWNlfSBmcm9tICcuL3dhbGwuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW0NvbHVtbl0sXG4gICAgcHJvdmlkZXJzIDogW1dhbGxTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxjb2x1bW4gKm5nRm9yPVwiI2NvbHVtbiBvZiBjb2x1bW5zXCIgW2ltYWdlTGlzdF09XCJjb2x1bW5cIiBbbG9hZEZ1bmN0aW9uXT1cImNvbHVtbkxvYWRlZFwiPjwvY29sdW1uPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBXYWxsIGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbHVtbnMgOiBzdHJpbmdbXVtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgd2FsbFNlcnZpY2U6V2FsbFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy53YWxsU2VydmljZS5nZXRQaG90b3MoKTtcbiAgICB9XG5cbiAgICBjb2x1bW5Mb2FkZWQgKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgLy9jb250YWluZXIuc3R5bGUubGVmdCA9IChOdW1iZXIoY29udGFpbmVyLnN0eWxlLmxlZnQuc3Vic3RyaW5nKDAsIGNvbnRhaW5lci5zdHlsZS5sZWZ0Lmxlbmd0aC0yKSkgKyAzKS50b1N0cmluZygpICsgXCJweFwiO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjb250YWluZXIub2Zmc2V0TGVmdCk7XG4gICAgICAgIH0sIDE3KTtcbiAgICB9XG59XG4iXX0=