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
                        //this.startAnimation();
                        this.loadFunction(container);
                    }
                };
                /**
                startAnimation
                Start the column animation once all images are loaded
                 */
                Column.prototype.startAnimation = function () {
                    var _this = this;
                    for (var i = 0; i < this.images.length; i++) {
                        (function () {
                            var curr = _this.images[i];
                            //  setInterval (()=>{
                            //      if (curr.style.left == "") {
                            //          curr.style.left = "1px";
                            //      }
                            //      else {
                            //          curr.style.left = (Number(curr.style.left.substring(0, curr.style.left.length-2)) + 1).toString() + "px";
                            //      }
                            //  }, 1);
                        })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFVSTtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQ7Ozs7a0JBSUU7Z0JBQ0YsNEJBQVcsR0FBWCxVQUFhLEtBQUssRUFBRSxTQUFTO29CQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN2Qyx3QkFBd0I7d0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRDs7O21CQUdHO2dCQUNGLCtCQUFjLEdBQWQ7b0JBQUEsaUJBZUM7b0JBYkcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMxQyxDQUFDOzRCQUNHLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLHNCQUFzQjs0QkFDdEIsb0NBQW9DOzRCQUNwQyxvQ0FBb0M7NEJBQ3BDLFNBQVM7NEJBQ1QsY0FBYzs0QkFDZCxxSEFBcUg7NEJBQ3JILFNBQVM7NEJBQ1QsVUFBVTt3QkFDYixDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNULENBQUM7Z0JBQ0wsQ0FBQztnQkFFRix5QkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBbEREO29CQUFDLFlBQUssRUFBRTs7eURBQUE7Z0JBRVI7b0JBQUMsWUFBSyxFQUFFOzs0REFBQTtnQkFmWjtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxRQUFRO3dCQUNuQixRQUFRLEVBQUcsaVFBTVY7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBdURGLGFBQUM7WUFBRCxDQUFDLEFBckRELElBcURDO1lBckRELDJCQXFEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnY29sdW1uJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwiY29sdW1uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjaXRlbSBvZiBpbWFnZUxpc3RcIiBjbGFzcz1cImNvbHVtbi1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgI2ltYWdlIChsb2FkKT1cImltYWdlTG9hZGVkKGltYWdlLCBjb250YWluZXIpXCIgc3JjPXt7aXRlbS5zcmN9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvKiogU3RyaW5nIG9mIGltYWdlIHNyY3MgKi9cbiAgICBASW5wdXQoKSBpbWFnZUxpc3QgOiBzdHJpbmdbXTtcbiAgICAvKiogTG9hZCBmdW5jdGlvbiB0byBiZSBmaXJlZCBhZnRlciBjb2x1bW4gaXMgbG9hZGVkICovXG4gICAgQElucHV0KCkgbG9hZEZ1bmN0aW9uIDogRnVuY3Rpb247XG5cbiAgICBsb2FkZWQgOiBudW1iZXI7XG4gICAgaW1hZ2VzIDogSFRNTEltYWdlRWxlbWVudFtdO1xuXG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubG9hZGVkID0gMDtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICBpbWFnZUxvYWRlZFxuICAgIGtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IGltYWdlcyBhcmUgbG9hZGVkXG4gICAgc3RvcmVzIGxvYWRlZCBpbWFnZXMgaW4gYXJyYXlcbiAgICAqL1xuICAgIGltYWdlTG9hZGVkIChpbWFnZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICB0aGlzLmxvYWRlZCsrO1xuICAgICAgICBpZiAodGhpcy5sb2FkZWQgPT0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAvL3RoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubG9hZEZ1bmN0aW9uKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICBzdGFydEFuaW1hdGlvblxuICAgIFN0YXJ0IHRoZSBjb2x1bW4gYW5pbWF0aW9uIG9uY2UgYWxsIGltYWdlcyBhcmUgbG9hZGVkXG4gICAgICovXG4gICAgIHN0YXJ0QW5pbWF0aW9uICgpIHtcblxuICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICgoKT0+IHtcbiAgICAgICAgICAgICAgICAgdmFyIGN1cnIgPSB0aGlzLmltYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAvLyAgc2V0SW50ZXJ2YWwgKCgpPT57XG4gICAgICAgICAgICAgICAgLy8gICAgICBpZiAoY3Vyci5zdHlsZS5sZWZ0ID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICBjdXJyLnN0eWxlLmxlZnQgPSBcIjFweFwiO1xuICAgICAgICAgICAgICAgIC8vICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgY3Vyci5zdHlsZS5sZWZ0ID0gKE51bWJlcihjdXJyLnN0eWxlLmxlZnQuc3Vic3RyaW5nKDAsIGN1cnIuc3R5bGUubGVmdC5sZW5ndGgtMikpICsgMSkudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgfSwgMSk7XG4gICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxufVxuIl19