import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngFormComponent } from './ang-form/ang-form.component';
import { ContentComponent } from './content/content.component';
import { DatalistComponent } from './datalist/datalist.component';

const routes: Routes = [
  {  path:"content", component:ContentComponent},
  {  path:"Datalist", component:DatalistComponent},
  {  path: "Angular", component:AngFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
