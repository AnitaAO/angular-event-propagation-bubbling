import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <div (click) ="onDivClicked()">
      <button (click)="onClick($event)">SAVE</button>
    </div>
    <p>Note that line 7 and 8 would display simultaneously(event bubbling) on the console until "stop propagation" is added like in line </p>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Event Binding Propagation";
  onDivClicked(){
    console.log("dive was clicked");
  }
  onClick($event: any){
    $event.stopPropagation();
    console.log("button was clicked", $event)
  }
}
