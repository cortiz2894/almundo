// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.html'
})
 
export class AppComponent { 
    public title : string ;

    constructor(){
        this.title = 'Titulo';
    }
}
