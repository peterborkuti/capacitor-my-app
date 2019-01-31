import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

import * as BP from 'bp-add';

const {  } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  num = 0;

  ngOnInit(): void {
    BP.Add.add({a: 1, b: 2}).
      then(value => {
        console.log((value));
        this.num = value.value;
      });
  }
}
