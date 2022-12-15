import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  username = '';

  constructor(){}

  ngOnInit(): void {
  }

  // onTypeInput(event: Event){
  //   this.username = (<HTMLInputElement>event.target).value;
  // }

  onButtonClick(){
    this.username = '';
  }

}
