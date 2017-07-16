import { ConfirmDialogWidget } from './widgets/confirm.dialog/index';
import { ServicesModule } from './services';
import { FooterModule } from './modules/footer';
import { BodyModule } from './modules/body';
import { HeaderModule } from './modules/header';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  bootstrap: [AppComponent]
}
)
export class AppModule { }
