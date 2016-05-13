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
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [column_component_1.Column],
                        providers: [wall_service_1.WallService],
                        template: "\n            <column *ngFor=\"#column of columns\" [column]=\"column\"></column>\n    "
                    }), 
                    __metadata('design:paramtypes', [wall_service_1.WallService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUdJLGNBQXFCLFdBQXVCO29CQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtnQkFFNUMsQ0FBQztnQkFFRCx1QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkFsQkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsTUFBTTt3QkFDakIsVUFBVSxFQUFHLENBQUMseUJBQU0sQ0FBQzt3QkFDckIsU0FBUyxFQUFHLENBQUMsMEJBQVcsQ0FBQzt3QkFDekIsUUFBUSxFQUFHLHlGQUVWO3FCQUNKLENBQUM7O3dCQUFBO2dCQVlGLFdBQUM7WUFBRCxDQUFDLEFBVkQsSUFVQztZQVZELHVCQVVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29sdW1ufSBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnXG5cbmltcG9ydCB7V2FsbFNlcnZpY2V9IGZyb20gJy4vd2FsbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3dhbGwnLFxuICAgIGRpcmVjdGl2ZXMgOiBbQ29sdW1uXSxcbiAgICBwcm92aWRlcnMgOiBbV2FsbFNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICAgICAgPGNvbHVtbiAqbmdGb3I9XCIjY29sdW1uIG9mIGNvbHVtbnNcIiBbY29sdW1uXT1cImNvbHVtblwiPjwvY29sdW1uPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBXYWxsIGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbHVtbnMgOiBzdHJpbmdbXVtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgd2FsbFNlcnZpY2U6V2FsbFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy53YWxsU2VydmljZS5nZXRQaG90b3MoKTtcbiAgICB9XG59XG4iXX0=