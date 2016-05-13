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
    var WallService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WallService = (function () {
                function WallService() {
                    this.columns = [];
                    this.pathToImages = "images/background/";
                    this.photoListBase = [];
                    this.photoList = [];
                    this.photos = [];
                    this.numCols = 10;
                    this.numRows = 3;
                    this.numBackgroundImages = 34;
                }
                WallService.prototype.getPhotos = function () {
                    //Set up photoList (hard-coded imgX.jpg, X = number)
                    for (var index = 1; index <= this.numBackgroundImages; index++) {
                        this.photoList.push(this.pathToImages + "img" + index + ".jpg");
                        this.photoListBase.push(this.pathToImages + "img" + index + ".jpg");
                    }
                    //Set up "photos" to be loaded randomly based on files in directory
                    for (var row = 0; row < this.numRows; row++) {
                        this.photos.push([]);
                        for (var col = 0; col < this.numCols; col++) {
                            var rand = Math.floor(Math.random() * (this.photoList.length));
                            this.photos[row].push({
                                src: this.photoList[rand],
                            });
                            this.photoList.splice(rand, 1);
                            //If photolist is empty, start repeating images
                            if (this.photoList.length == 0) {
                                this.photoList = this.photoListBase.slice(0);
                            }
                        }
                    }
                    return this.photos;
                };
                WallService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WallService);
                return WallService;
            }());
            exports_1("WallService", WallService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBSUk7b0JBSEEsWUFBTyxHQUFnQixFQUV0QixDQUFDO29CQUtGLGlCQUFZLEdBQVksb0JBQW9CLENBQUM7b0JBQzdDLGtCQUFhLEdBQWMsRUFBRSxDQUFDO29CQUM5QixjQUFTLEdBQWMsRUFBRSxDQUFDO29CQUMxQixXQUFNLEdBQWEsRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksQ0FBQyxDQUFDO29CQUNyQix3QkFBbUIsR0FBWSxFQUFFLENBQUM7Z0JBUmxDLENBQUM7Z0JBVUQsK0JBQVMsR0FBVDtvQkFDSSxvREFBb0Q7b0JBQ3BELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7d0JBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxZQUFZLFdBQU0sS0FBSyxTQUFNLENBQUMsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFlBQVksV0FBTSxLQUFLLFNBQU0sQ0FBQyxDQUFDO29CQUNuRSxDQUFDO29CQUNELG1FQUFtRTtvQkFDbkUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUNsQixHQUFHLEVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7NkJBQzdCLENBQUMsQ0FBQzs0QkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQy9CLCtDQUErQzs0QkFDL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakQsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBdkNMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXdDYixrQkFBQztZQUFELENBQUMsQUF2Q0QsSUF1Q0M7WUF2Q0QscUNBdUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2FsbFNlcnZpY2Uge1xuICAgIGNvbHVtbnMgOiBzdHJpbmdbXVtdID0gW1xuXG4gICAgXTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBwYXRoVG9JbWFnZXMgOiBzdHJpbmcgPSBcImltYWdlcy9iYWNrZ3JvdW5kL1wiO1xuICAgIHBob3RvTGlzdEJhc2UgOiBzdHJpbmdbXSA9IFtdO1xuICAgIHBob3RvTGlzdCA6IHN0cmluZ1tdID0gW107XG4gICAgcGhvdG9zIDogYW55W11bXSA9IFtdO1xuICAgIG51bUNvbHMgOiBudW1iZXIgPSAxMDtcbiAgICBudW1Sb3dzIDogbnVtYmVyID0gMztcbiAgICBudW1CYWNrZ3JvdW5kSW1hZ2VzIDogbnVtYmVyID0gMzQ7XG5cbiAgICBnZXRQaG90b3MgKCkge1xuICAgICAgICAvL1NldCB1cCBwaG90b0xpc3QgKGhhcmQtY29kZWQgaW1nWC5qcGcsIFggPSBudW1iZXIpXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gdGhpcy5udW1CYWNrZ3JvdW5kSW1hZ2VzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBob3RvTGlzdC5wdXNoKGAke3RoaXMucGF0aFRvSW1hZ2VzfWltZyR7aW5kZXh9LmpwZ2ApO1xuICAgICAgICAgICAgdGhpcy5waG90b0xpc3RCYXNlLnB1c2goYCR7dGhpcy5wYXRoVG9JbWFnZXN9aW1nJHtpbmRleH0uanBnYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9TZXQgdXAgXCJwaG90b3NcIiB0byBiZSBsb2FkZWQgcmFuZG9tbHkgYmFzZWQgb24gZmlsZXMgaW4gZGlyZWN0b3J5XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHRoaXMucGhvdG9zLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5udW1Db2xzOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKih0aGlzLnBob3RvTGlzdC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3Rvc1tyb3ddLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzcmMgOiB0aGlzLnBob3RvTGlzdFtyYW5kXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvTGlzdC5zcGxpY2UocmFuZCwgMSk7XG4gICAgICAgICAgICAgICAgLy9JZiBwaG90b2xpc3QgaXMgZW1wdHksIHN0YXJ0IHJlcGVhdGluZyBpbWFnZXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waG90b0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waG90b0xpc3QgPSB0aGlzLnBob3RvTGlzdEJhc2Uuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBob3RvcztcbiAgICB9XG59XG4iXX0=