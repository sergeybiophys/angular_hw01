import { Component } from '@angular/core';

export interface PassportInterface {
  series: string;
  number: string;
}
export interface PersonInterface {
  firstName: string;
  lastName: string;
  middleName: string;
  birth: Date;
  profession: string;
  passport: PassportInterface;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'hw01-app';

  passport: PassportInterface = {
    series: 'HH',
    number: '000001'
  };

  person: PersonInterface = {
    firstName: 'Somebody',
    lastName: 'Unknown',
    middleName:'New',
    birth: new Date('01-01-2001'),
    profession: 'super',
    passport: this.passport

  }
}

