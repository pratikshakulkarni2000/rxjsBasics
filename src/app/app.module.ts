import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosCompltComponent } from './shared/components/todos-complt/todos-complt.component';
import { TodosNCompltComponent } from './shared/components/todos-ncomplt/todos-ncomplt.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TodosComponent,
    TodosCompltComponent,
    TodosNCompltComponent
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
