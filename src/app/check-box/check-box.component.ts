import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})

export class CheckBoxComponent {

 
  checkboxes = [
    { label: '1001', value: false },
    { label: '1002', value: false },
    { label: '1003', value: false }
  ];

  onChange(checkbox: any) {
    checkbox.value = !checkbox.value;

    console.log('checkboxes[0].value: ',this.checkboxes[0].value);
    console.log('this.checkboxes[1].value: ', this.checkboxes[1].value);
    console.log('this.checkboxes[2].value: ', this.checkboxes[2].value);
    
  }

  reseCheckBox() {
    for (let i = 0; i < this.checkboxes.length; i++) {
      this.checkboxes[i].value=false
      console.log('this.checkboxes[i].value=false: ', this.checkboxes[i].value=false);
    }
  }
}
