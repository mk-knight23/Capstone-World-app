import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "countries", component: CountriesComponent },
  { path: "countries/:name", component: CountryDetailComponent },
  { path: "login", component: LoginComponent},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
