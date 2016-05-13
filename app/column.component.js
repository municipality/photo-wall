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
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Column.prototype, "column", void 0);
                Column = __decorate([
                    core_1.Component({
                        selector: 'column',
                        template: "\n            <div *ngFor=\"#item of column\" class=\"column-image\">\n                <img src={{item.src}}>\n            </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Column);
                return Column;
            }());
            exports_1("Column", Column);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUhEO29CQUFDLFlBQUssRUFBRTs7c0RBQUE7Z0JBVlo7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFHLHlJQUlWO3FCQUNKLENBQUM7OzBCQUFBO2dCQU9GLGFBQUM7WUFBRCxDQUFDLEFBTEQsSUFLQztZQUxELDJCQUtDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnY29sdW1uJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwiI2l0ZW0gb2YgY29sdW1uXCIgY2xhc3M9XCJjb2x1bW4taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17e2l0ZW0uc3JjfX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uIHtcbiAgICBASW5wdXQoKSBjb2x1bW4gOiBzdHJpbmdbXTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG4iXX0=