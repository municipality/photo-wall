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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBR0k7b0JBRkEsWUFBTyxHQUFnQixFQUFFLENBQUM7b0JBTTFCLGlCQUFZLEdBQVksb0JBQW9CLENBQUM7b0JBQzdDLGtCQUFhLEdBQWMsRUFBRSxDQUFDO29CQUM5QixjQUFTLEdBQWMsRUFBRSxDQUFDO29CQUMxQixXQUFNLEdBQWEsRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksQ0FBQyxDQUFDO29CQUNyQix3QkFBbUIsR0FBWSxFQUFFLENBQUM7Z0JBUmxDLENBQUM7Z0JBVUQsK0JBQVMsR0FBVDtvQkFDSSxvREFBb0Q7b0JBQ3BELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7d0JBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxZQUFZLFdBQU0sS0FBSyxTQUFNLENBQUMsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFlBQVksV0FBTSxLQUFLLFNBQU0sQ0FBQyxDQUFDO29CQUNuRSxDQUFDO29CQUNELG1FQUFtRTtvQkFDbkUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUNsQixHQUFHLEVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7NkJBQzdCLENBQUMsQ0FBQzs0QkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQy9CLCtDQUErQzs0QkFDL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakQsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBdENMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXVDYixrQkFBQztZQUFELENBQUMsQUF0Q0QsSUFzQ0M7WUF0Q0QscUNBc0NDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2FsbFNlcnZpY2Uge1xuICAgIGNvbHVtbnMgOiBzdHJpbmdbXVtdID0gW107XG4gICAgXG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgcGF0aFRvSW1hZ2VzIDogc3RyaW5nID0gXCJpbWFnZXMvYmFja2dyb3VuZC9cIjtcbiAgICBwaG90b0xpc3RCYXNlIDogc3RyaW5nW10gPSBbXTtcbiAgICBwaG90b0xpc3QgOiBzdHJpbmdbXSA9IFtdO1xuICAgIHBob3RvcyA6IGFueVtdW10gPSBbXTtcbiAgICBudW1Db2xzIDogbnVtYmVyID0gMTA7XG4gICAgbnVtUm93cyA6IG51bWJlciA9IDM7XG4gICAgbnVtQmFja2dyb3VuZEltYWdlcyA6IG51bWJlciA9IDM0O1xuXG4gICAgZ2V0UGhvdG9zICgpIHtcbiAgICAgICAgLy9TZXQgdXAgcGhvdG9MaXN0IChoYXJkLWNvZGVkIGltZ1guanBnLCBYID0gbnVtYmVyKVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IHRoaXMubnVtQmFja2dyb3VuZEltYWdlczsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5waG90b0xpc3QucHVzaChgJHt0aGlzLnBhdGhUb0ltYWdlc31pbWcke2luZGV4fS5qcGdgKTtcbiAgICAgICAgICAgIHRoaXMucGhvdG9MaXN0QmFzZS5wdXNoKGAke3RoaXMucGF0aFRvSW1hZ2VzfWltZyR7aW5kZXh9LmpwZ2ApO1xuICAgICAgICB9XG4gICAgICAgIC8vU2V0IHVwIFwicGhvdG9zXCIgdG8gYmUgbG9hZGVkIHJhbmRvbWx5IGJhc2VkIG9uIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm51bVJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICB0aGlzLnBob3Rvcy5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMubnVtQ29sczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoodGhpcy5waG90b0xpc3QubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waG90b3Nbcm93XS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3JjIDogdGhpcy5waG90b0xpc3RbcmFuZF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waG90b0xpc3Quc3BsaWNlKHJhbmQsIDEpO1xuICAgICAgICAgICAgICAgIC8vSWYgcGhvdG9saXN0IGlzIGVtcHR5LCBzdGFydCByZXBlYXRpbmcgaW1hZ2VzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGhvdG9MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvdG9MaXN0ID0gdGhpcy5waG90b0xpc3RCYXNlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5waG90b3M7XG4gICAgfVxufVxuIl19