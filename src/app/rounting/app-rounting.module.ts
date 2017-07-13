import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LandingPageComponent } from "../views/landing-page/landing-page.component"

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: '**', redirectTo: 'asd', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
