import {Component} from '@angular/core';

@Component({
    selector: 'hotel-list',
    templateUrl: 'app/views/hotel-list.html'
})

export class HotelListComponent {
    public title : string;
    public hoteles : Array<string>;

    constructor(){
        this.title = 'Listado de Hoteles';
        this.hoteles = ['hotel' , 'hotel 2' , 'hotel 3'];
    }
}