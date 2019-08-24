import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduComponent } from './edu/edu.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: EduComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EduComponent]
})
export class EduModule { }
