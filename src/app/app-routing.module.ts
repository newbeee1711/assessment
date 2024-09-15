import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackathonDetailsComponent } from './hackathon-details/hackathon-details/hackathon-details.component';
import { HackathonMainPageComponent } from './hackathon-main-page/hackathon-main-page/hackathon-main-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'add', component: HackathonDetailsComponent }, // Route for hackathon-details
  {path:'edit',component:HackathonDetailsComponent}  ,
  {path:'hackathon',component:HackathonMainPageComponent},
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // other routes can go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
