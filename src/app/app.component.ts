import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = [1, 2, 3];

  formControl = new FormControl();

  public setValueToThree($event: any) {
    console.log('Setting value to 3');
    const val = 3;
    this.formControl.setValue(val);
  }
}
