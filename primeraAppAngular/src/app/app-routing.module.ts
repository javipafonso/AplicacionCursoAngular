import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
{
  path: 'tasks', 
  loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
},
{
  path: 'about', 
  loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
},
{
  path: 'course', 
  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
},
{
  path: 'books', 
  loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
},
{ path: '', pathMatch: 'full', redirectTo: 'home' },
//componente errores { path: '**', component: PathNotFoundComponent }
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
