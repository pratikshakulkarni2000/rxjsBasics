import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { TodosCompltComponent } from './shared/components/todos-complt/todos-complt.component';
import { TodosNCompltComponent } from './shared/components/todos-ncomplt/todos-ncomplt.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'todos',
    component : TodosComponent
  },
  {
    path : 'todoCmplt',
    component : TodosCompltComponent
  },
  {
    path : 'todoNoCmplt',
    component : TodosNCompltComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
