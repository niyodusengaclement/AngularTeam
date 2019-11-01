import { Component, OnInit,Input } from '@angular/core';
import { RegistrationService} from '../registration.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private _registrationService:RegistrationService) { }
  

  ngOnInit() {
  }

  onRegister(form){
    console.log(form.value);
    this._registrationService.register(form.value).subscribe(
      Response=>console.log('Success', Response),
      error=>console.error('Error,',error)
    );

  }

}
