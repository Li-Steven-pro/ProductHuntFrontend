import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHuntDateComponent } from './view/product-hunt-date/product-hunt-date.component';

const routes: Routes = [
  {path : '', component : ProductHuntDateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
