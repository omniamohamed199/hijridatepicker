import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    NgbAlertModule,
    FormsModule,
    NgbDatepickerModule
  ],
  providers: [],
  entryComponents: [AppComponent]

})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const elComponet = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define("tasheel-hijridatepicker", elComponet);
  }
}
