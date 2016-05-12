import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';
import {Wall} from './wall.component';


@Component ({
    selector : 'app',
    directives : [Wall],
    template : `
        <wall></wall>
    `
})

class App {

    constructor () {
    }

}



bootstrap(App);
