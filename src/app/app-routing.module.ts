import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TechModule} from './tech/tech.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', loadChildren: './edu/edu.module#EduModule'},
  { path: 'technologies', loadChildren: './tech/tech.module#TechModule'},
  { path: 'projects', loadChildren: './project/project.module#ProjectModule'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    TechModule
  ],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class AppRoutingModule { }
