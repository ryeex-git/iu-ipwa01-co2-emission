import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ImprintComponent } from './views/imprint/imprint.component';

const routes: Routes = [
  { path: '', component: BodyContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
