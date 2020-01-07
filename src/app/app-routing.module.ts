import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EventsComponent } from './views/events/events.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events/:id', component: EventsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
