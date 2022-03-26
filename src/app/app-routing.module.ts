import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockselectorComponent } from './blockselector/blockselector.component'

const routes: Routes = [{
  path: 'blockselector', component: BlockselectorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
