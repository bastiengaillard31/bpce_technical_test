import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: LaunchesComponent },
  { path: 'launch/:id', component: LaunchDetailComponent },
  { path: 'error', component: ErrorPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
