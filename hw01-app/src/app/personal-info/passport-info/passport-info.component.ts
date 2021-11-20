import {Component, Input, Output, EventEmitter} from "@angular/core";
import { PassportInterface } from "src/app/app.component";


@Component({
    selector:'passport-info',
    templateUrl: './passport-info.component.html',
    styleUrls: ['./passport-info.component.scss']
})

export class PassportInfoComponent {
    @Input() passport: PassportInterface = {
        series: '',
        number: ''
    };
}