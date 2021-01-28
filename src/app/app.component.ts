import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name       : string   = 'Capitan America';
  name2      : string   = 'CapItAn aMeRIca';
  array      : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI         : number   = Math.PI;
  percentage : number   = 0.234;
  salary     : number   = 1234.5;
  currentDate: Date     = new Date();
  activate   : boolean  = true;

  language   : string = 'es';
  videoUrl   : string = 'https://www.youtube.com/embed/fqBNnC_apV4';

  valuePromise = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('data works');
    }, 4500);
  });

  heroe = {
    name: 'Logan',
    codename: 'Wolverine',
    age: '500',
    direction: {
      street: 'First',
      house: 20
    }
  };
}
