import { ServicesModule } from './services/services.module';
import { FooterModule } from './modules/footer/footer.module';
import { BodyModule } from './modules/body/body.module';
import { HeaderModule } from './modules/header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // material specific
    BrowserAnimationsModule,
    // app modules
    HeaderModule,
    BodyModule,
    FooterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
