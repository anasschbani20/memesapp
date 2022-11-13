import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {ListGifsComponent} from "./listGifs/listGifs.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'memes'
  },
  {
    path: 'gif',
    component: ListGifsComponent
  },
  {
    path: 'memes',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
