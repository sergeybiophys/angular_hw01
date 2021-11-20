import {Component, Input, Output, EventEmitter, ViewChild} from "@angular/core";
import { PersonInterface } from "../app.component";
import { PassportInterface } from "../app.component";
import { PassportInfoComponent } from "./passport-info/passport-info.component";

@Component ({
    selector: 'personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss'],

})

export class PersonalInfoComponent {

    @Input() person: PersonInterface = {
        firstName:'',
        lastName: '',
        middleName: '',
        birth: new Date('0-0-0000'),
        profession:'',
        @Input() passport:  PassportInterface = {
            series: '',
            number: ''
        };
    };
}