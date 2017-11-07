import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <app-inline-template></app-inline-template>
        <hr/>
        <app-external-template></app-external-template>`
})
export class AppComponent {}
