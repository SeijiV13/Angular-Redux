import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//REDUX
import { StoreModule} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';

// FOR ROUTES
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_PROVIDER} from './routes/main.routes'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ROUTER_PROVIDER,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
