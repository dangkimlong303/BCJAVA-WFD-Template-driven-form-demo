import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {

  contact = {
    "contactName": "LongDK",
    "email": "abc@deg.com",
    "facebook": "facebook.com",
    "twitter": "twitter.com",
    "website": "tiepphan.com",
    "tel": "1234-5678-90"
  }


  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    // Do something awesome
    console.log(formValue);
    // throw Error('something go wrong')
  }

}
