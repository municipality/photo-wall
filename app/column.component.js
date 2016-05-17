System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Column;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Column = (function () {
                function Column() {
                    this.loaded = 0;
                    this.images = [];
                }
                /**
                imageLoaded
                keeps track of how many images are loaded
                stores loaded images in array
                */
                Column.prototype.imageLoaded = function (image, container) {
                    this.images.push(image);
                    this.loaded++;
                    if (this.loaded == this.imageList.length) {
                        // load function handles the animation from wall.component
                        this.loadFunction(container);
                    }
                };
                Column.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Column.prototype, "imageList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], Column.prototype, "loadFunction", void 0);
                Column = __decorate([
                    core_1.Component({
                        selector: 'column',
                        template: "\n        <div #container class=\"column-container\">\n            <div *ngFor=\"#item of imageList\" class=\"column-image\">\n                <img #image (load)=\"imageLoaded(image, container)\" src={{item.src}}>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Column);
                return Column;
            }());
            exports_1("Column", Column);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFVSTtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQ7Ozs7a0JBSUU7Z0JBQ0YsNEJBQVcsR0FBWCxVQUFhLEtBQUssRUFBRSxTQUFTO29CQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN2QywwREFBMEQ7d0JBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx5QkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBN0JEO29CQUFDLFlBQUssRUFBRTs7eURBQUE7Z0JBRVI7b0JBQUMsWUFBSyxFQUFFOzs0REFBQTtnQkFmWjtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxRQUFRO3dCQUNuQixRQUFRLEVBQUcsaVFBTVY7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBa0NGLGFBQUM7WUFBRCxDQUFDLEFBaENELElBZ0NDO1lBaENELDJCQWdDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnY29sdW1uJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwiY29sdW1uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjaXRlbSBvZiBpbWFnZUxpc3RcIiBjbGFzcz1cImNvbHVtbi1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgI2ltYWdlIChsb2FkKT1cImltYWdlTG9hZGVkKGltYWdlLCBjb250YWluZXIpXCIgc3JjPXt7aXRlbS5zcmN9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvKiogU3RyaW5nIG9mIGltYWdlIHNyY3MgKi9cbiAgICBASW5wdXQoKSBpbWFnZUxpc3QgOiBzdHJpbmdbXTtcbiAgICAvKiogTG9hZCBmdW5jdGlvbiB0byBiZSBmaXJlZCBhZnRlciBjb2x1bW4gaXMgbG9hZGVkICovXG4gICAgQElucHV0KCkgbG9hZEZ1bmN0aW9uIDogRnVuY3Rpb247XG5cbiAgICBsb2FkZWQgOiBudW1iZXI7XG4gICAgaW1hZ2VzIDogSFRNTEltYWdlRWxlbWVudFtdO1xuXG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubG9hZGVkID0gMDtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICBpbWFnZUxvYWRlZFxuICAgIGtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IGltYWdlcyBhcmUgbG9hZGVkXG4gICAgc3RvcmVzIGxvYWRlZCBpbWFnZXMgaW4gYXJyYXlcbiAgICAqL1xuICAgIGltYWdlTG9hZGVkIChpbWFnZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICB0aGlzLmxvYWRlZCsrO1xuICAgICAgICBpZiAodGhpcy5sb2FkZWQgPT0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBsb2FkIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIGFuaW1hdGlvbiBmcm9tIHdhbGwuY29tcG9uZW50XG4gICAgICAgICAgICB0aGlzLmxvYWRGdW5jdGlvbihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxufVxuIl19