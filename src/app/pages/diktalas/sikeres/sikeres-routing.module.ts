import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SikeresComponent } from './sikeres.component';

const routes: Routes = [{ path: ':userId', component: SikeresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SikeresRoutingModule { }
