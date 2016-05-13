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
                    // setInterval(()=>{
                    //     container.style.left = (Number(container.style.left.substring(0, container.style.left.length-2)) - 3).toString() + "px";
                    //
                    //     let child = container.children[0];
                    //     if (container.offsetLeft + child.offsetWidth <= 0) {
                    //         container.removeChild(container.children[0]);
                    //         container.innerHTML = `${container.innerHTML}
                    //                                 <div class="column-image">${child.innerHTML}</div>`
                    //         container.style.left = "0px";
                    //     }
                    //     // if (container.offsetWidth + container.offsetLeft >= window.innerWidth) {
                    //     //     container.innerHTML = `<div class="column-image">
                    //     //         <img src="images/background/img30.jpg">
                    //     //         </div>${container.innerHTML}`;
                    //     // }
                    // }, 17);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUdJLGNBQXFCLFdBQXVCO29CQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtnQkFFNUMsQ0FBQztnQkFFRCx1QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCwyQkFBWSxHQUFaLFVBQWMsU0FBUztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMxQixvQkFBb0I7b0JBQ3BCLCtIQUErSDtvQkFDL0gsRUFBRTtvQkFDRix5Q0FBeUM7b0JBQ3pDLDJEQUEyRDtvQkFDM0Qsd0RBQXdEO29CQUN4RCx3REFBd0Q7b0JBQ3hELHNGQUFzRjtvQkFDdEYsd0NBQXdDO29CQUN4QyxRQUFRO29CQUNSLGtGQUFrRjtvQkFDbEYsK0RBQStEO29CQUMvRCx5REFBeUQ7b0JBQ3pELGdEQUFnRDtvQkFDaEQsV0FBVztvQkFDWCxVQUFVO2dCQUNkLENBQUM7Z0JBdkNMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLHlCQUFNLENBQUM7d0JBQ3JCLFNBQVMsRUFBRyxDQUFDLDBCQUFXLENBQUM7d0JBQ3pCLFFBQVEsRUFBRyw0SEFFVjtxQkFDSixDQUFDOzt3QkFBQTtnQkFpQ0YsV0FBQztZQUFELENBQUMsQUEvQkQsSUErQkM7WUEvQkQsdUJBK0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29sdW1ufSBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnXG5cbmltcG9ydCB7V2FsbFNlcnZpY2V9IGZyb20gJy4vd2FsbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3dhbGwnLFxuICAgIGRpcmVjdGl2ZXMgOiBbQ29sdW1uXSxcbiAgICBwcm92aWRlcnMgOiBbV2FsbFNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICAgICAgPGNvbHVtbiAqbmdGb3I9XCIjY29sdW1uIG9mIGNvbHVtbnNcIiBbaW1hZ2VMaXN0XT1cImNvbHVtblwiIFtsb2FkRnVuY3Rpb25dPVwiY29sdW1uTG9hZGVkXCI+PC9jb2x1bW4+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFdhbGwgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29sdW1ucyA6IHN0cmluZ1tdW107XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSB3YWxsU2VydmljZTpXYWxsU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLndhbGxTZXJ2aWNlLmdldFBob3RvcygpO1xuICAgIH1cblxuICAgIGNvbHVtbkxvYWRlZCAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIC8vIHNldEludGVydmFsKCgpPT57XG4gICAgICAgIC8vICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IChOdW1iZXIoY29udGFpbmVyLnN0eWxlLmxlZnQuc3Vic3RyaW5nKDAsIGNvbnRhaW5lci5zdHlsZS5sZWZ0Lmxlbmd0aC0yKSkgLSAzKS50b1N0cmluZygpICsgXCJweFwiO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgbGV0IGNoaWxkID0gY29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICAvLyAgICAgaWYgKGNvbnRhaW5lci5vZmZzZXRMZWZ0ICsgY2hpbGQub2Zmc2V0V2lkdGggPD0gMCkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAvLyAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtjb250YWluZXIuaW5uZXJIVE1MfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4taW1hZ2VcIj4ke2NoaWxkLmlubmVySFRNTH08L2Rpdj5gXG4gICAgICAgIC8vICAgICAgICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgLy8gaWYgKGNvbnRhaW5lci5vZmZzZXRXaWR0aCArIGNvbnRhaW5lci5vZmZzZXRMZWZ0ID49IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIC8vICAgICAvLyAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29sdW1uLWltYWdlXCI+XG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2JhY2tncm91bmQvaW1nMzAuanBnXCI+XG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIDwvZGl2PiR7Y29udGFpbmVyLmlubmVySFRNTH1gO1xuICAgICAgICAvLyAgICAgLy8gfVxuICAgICAgICAvLyB9LCAxNyk7XG4gICAgfVxufVxuIl19