import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ng2-bootstrap';
import { AccordionModule } from 'ng2-bootstrap';
import { TypeaheadModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  AlertModule.forRoot(), 
                  AccordionModule.forRoot(),
                  TypeaheadModule.forRoot(),
                  ButtonsModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
