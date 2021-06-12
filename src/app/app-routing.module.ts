import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'project-list', component: ProductListComponent},
    {path: 'dashbroad', component: DashboardComponent},
    {path:'', redirectTo: 'product-list', pathMatch: 'full' },
    {path:'**',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
