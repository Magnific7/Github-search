import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchappComponent } from './searchapp/searchapp.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { GoalFormComponent } from './goal-form/goal-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { CapsPipe } from './caps.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchappComponent,
    // GoalFormComponent,
    SearchFormComponent,
    StrikethroughDirective,
    CapsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }