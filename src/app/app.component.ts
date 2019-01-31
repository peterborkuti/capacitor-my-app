import { Component, OnInit } from '@angular/core';
import { Add } from 'bp-add';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  num = 0;
  ver = '';

  addService = new Add();

  ngOnInit(): void {
    this.addService.add({a: 1, b: 2}).
      then(value => {
        console.log((value));
        this.num = value.value;
        this.ver = value.ver;
      });
    }
}
