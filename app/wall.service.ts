import {Injectable} from 'angular2/core';

@Injectable()
export class WallService {
    columns : string[][] = [

    ];
    constructor () {

    }

    pathToImages : string = "images/background/";
    photoListBase : string[] = [];
    photoList : string[] = [];
    photos : any[][] = [];
    numCols : number = 10;
    numRows : number = 3;
    numBackgroundImages : number = 34;

    getPhotos () {
        //Set up photoList (hard-coded imgX.jpg, X = number)
        for (let index = 1; index <= this.numBackgroundImages; index++) {
            this.photoList.push(`${this.pathToImages}img${index}.jpg`);
            this.photoListBase.push(`${this.pathToImages}img${index}.jpg`);
        }
        //Set up "photos" to be loaded randomly based on files in directory
        for (let row = 0; row < this.numRows; row++) {
            this.photos.push([]);
            for (let col = 0; col < this.numCols; col++) {
                let rand = Math.floor(Math.random()*(this.photoList.length));
                this.photos[row].push({
                    src : this.photoList[rand],
                });
                this.photoList.splice(rand, 1);
                //If photolist is empty, start repeating images
                if (this.photoList.length == 0) {
                    this.photoList = this.photoListBase.slice(0);
                }
            }
        }
        return this.photos;
    }
}
