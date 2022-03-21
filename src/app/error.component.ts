import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Error {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ErrorComponent  {
  @Input() name: string;
}
