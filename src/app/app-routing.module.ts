import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { ImagesGenerationComponent } from './images-generation/images-generation.component';
import { Textdavinciedit001Component } from './textdavinciedit001/textdavinciedit001.component';
import { ModerationsComponent } from "./moderations/moderations.component";

const routes: Routes = [
  { path: 't003', component: Textdavinci003Component }, 
  { path: 'images-generation', component: ImagesGenerationComponent }, 
  { path: 'textdavinciedit001', component: Textdavinciedit001Component }, 
  { path: 'moderations', component: ModerationsComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
