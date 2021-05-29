import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JokeComponent } from './components/joke/joke.component';
import { FormsComponent } from './components/forms/forms.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { SaveJokesComponent } from './components/save-jokes/save-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeComponent,
    FormsComponent,
    CockpitComponent,
    SaveJokesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
