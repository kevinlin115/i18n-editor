import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: '**', redirectTo: 'a' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
