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
                /** After column photos are done loaded, start animation */
                Wall.prototype.startAnimation = function (container) {
                    console.log(container);
                    var container = container;
                    container.onmouseenter = function (e) {
                        container.hover = true;
                    };
                    container.onmouseleave = function (e) {
                        container.hover = false;
                    };
                    var speed = Math.random() * 10 + 1;
                    setInterval(function () {
                        if (!container.hover) {
                            container.style.left = (Number(container.style.left.substring(0, container.style.left.length - 2)) - speed).toString() + "px";
                            var child = container.children[0];
                            if (container.offsetLeft + child.offsetWidth <= 0) {
                                container.style.left = "0px";
                                container.appendChild(child);
                                child.style.left = "-4px";
                            }
                        }
                    }, 60);
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [column_component_1.Column],
                        providers: [wall_service_1.WallService],
                        template: "\n            <column *ngFor=\"#column of columns\" [imageList]=\"column\" [loadFunction]=\"startAnimation\"></column>\n    "
                    }), 
                    __metadata('design:paramtypes', [wall_service_1.WallService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUdJLGNBQXFCLFdBQXVCO29CQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtnQkFFNUMsQ0FBQztnQkFFRCx1QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCwyREFBMkQ7Z0JBQzNELDZCQUFjLEdBQWQsVUFBZ0IsU0FBUztvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMxQixTQUFTLENBQUMsWUFBWSxHQUFHLFVBQUMsQ0FBQzt3QkFDdkIsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQzNCLENBQUMsQ0FBQTtvQkFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQUMsQ0FBQzt3QkFDdkIsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQzVCLENBQUMsQ0FBQTtvQkFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDakMsV0FBVyxDQUFDO3dCQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ25CLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDOzRCQUM1SCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNsQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDaEQsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dDQUM3QixTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7NEJBQzlCLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsTUFBTTt3QkFDakIsVUFBVSxFQUFHLENBQUMseUJBQU0sQ0FBQzt3QkFDckIsU0FBUyxFQUFHLENBQUMsMEJBQVcsQ0FBQzt3QkFDekIsUUFBUSxFQUFHLDhIQUVWO3FCQUNKLENBQUM7O3dCQUFBO2dCQW9DRixXQUFDO1lBQUQsQ0FBQyxBQWxDRCxJQWtDQztZQWxDRCx1QkFrQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb2x1bW59IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCdcblxuaW1wb3J0IHtXYWxsU2VydmljZX0gZnJvbSAnLi93YWxsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnd2FsbCcsXG4gICAgZGlyZWN0aXZlcyA6IFtDb2x1bW5dLFxuICAgIHByb3ZpZGVycyA6IFtXYWxsU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgICAgICA8Y29sdW1uICpuZ0Zvcj1cIiNjb2x1bW4gb2YgY29sdW1uc1wiIFtpbWFnZUxpc3RdPVwiY29sdW1uXCIgW2xvYWRGdW5jdGlvbl09XCJzdGFydEFuaW1hdGlvblwiPjwvY29sdW1uPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBXYWxsIGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbHVtbnMgOiBzdHJpbmdbXVtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgd2FsbFNlcnZpY2U6V2FsbFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy53YWxsU2VydmljZS5nZXRQaG90b3MoKTtcbiAgICB9XG5cbiAgICAvKiogQWZ0ZXIgY29sdW1uIHBob3RvcyBhcmUgZG9uZSBsb2FkZWQsIHN0YXJ0IGFuaW1hdGlvbiAqL1xuICAgIHN0YXJ0QW5pbWF0aW9uIChjb250YWluZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coY29udGFpbmVyKTtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29udGFpbmVyLm9ubW91c2VlbnRlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuaG92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5vbm1vdXNlbGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmhvdmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNwZWVkID0gTWF0aC5yYW5kb20oKSoxMCArIDE7XG4gICAgICAgIHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5ob3Zlcikge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gKE51bWJlcihjb250YWluZXIuc3R5bGUubGVmdC5zdWJzdHJpbmcoMCwgY29udGFpbmVyLnN0eWxlLmxlZnQubGVuZ3RoLTIpKSAtIHNwZWVkKS50b1N0cmluZygpICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLm9mZnNldExlZnQgKyBjaGlsZC5vZmZzZXRXaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUubGVmdCA9IFwiLTRweFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNjApO1xuICAgIH1cbn1cbiJdfQ==