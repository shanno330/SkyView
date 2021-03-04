import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoonComponent } from './components/moon/moon.component';

const routes: Routes = [
  { path: '', component: MoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
