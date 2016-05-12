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
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [column_component_1.Column],
                        providers: [wall_service_1.WallService],
                        template: "\n        <div id=\"wall\">\n            <column></column>\n            <column></column>\n        <div>\n    "
                    }), 
                    __metadata('design:paramtypes', [wall_service_1.WallService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFFSSxjQUFxQixXQUF1QjtvQkFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7Z0JBRTVDLENBQUM7Z0JBaEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLHlCQUFNLENBQUM7d0JBQ3JCLFNBQVMsRUFBRyxDQUFDLDBCQUFXLENBQUM7d0JBQ3pCLFFBQVEsRUFBRyxnSEFLVjtxQkFDSixDQUFDOzt3QkFBQTtnQkFPRixXQUFDO1lBQUQsQ0FBQyxBQUxELElBS0M7WUFMRCx1QkFLQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb2x1bW59IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCdcblxuaW1wb3J0IHtXYWxsU2VydmljZX0gZnJvbSAnLi93YWxsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnd2FsbCcsXG4gICAgZGlyZWN0aXZlcyA6IFtDb2x1bW5dLFxuICAgIHByb3ZpZGVycyA6IFtXYWxsU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJ3YWxsXCI+XG4gICAgICAgICAgICA8Y29sdW1uPjwvY29sdW1uPlxuICAgICAgICAgICAgPGNvbHVtbj48L2NvbHVtbj5cbiAgICAgICAgPGRpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgV2FsbCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSB3YWxsU2VydmljZTpXYWxsU2VydmljZSkge1xuXG4gICAgfVxufVxuIl19