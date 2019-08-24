import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './tech/tech.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: TechComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TechComponent]
})
export class TechModule { }
