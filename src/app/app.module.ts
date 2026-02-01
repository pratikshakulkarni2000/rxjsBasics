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
import { TodosNCompltComponent } from './shared/components/todos-ncomplt/todos-ncomplt.component';
import { OneComponent } from './shared/components/one/one.component';
import { TwoComponent } from './shared/components/two/two.component';
import { ThreeComponent } from './shared/components/three/three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './shared/components/main/main.component';
import { TodoDashboardComponent } from './shared/components2.crud/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components2.crud/todo-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components2.crud/todo-dashboard/todo-list/todo-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetConfirmComponent } from './shared/components2.crud/get-confirm/get-confirm.component';
import { StudentDashboardComponent } from './shared/component3.apicrud/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component3.apicrud/student-form/student-form.component';
import { StudentListComponent } from './shared/component3.apicrud/student-list/student-list.component';
import { MaterialModule } from './shared/component3.apicrud/material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TodosComponent,
    TodosCompltComponent,
    TodosNCompltComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    MainComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
