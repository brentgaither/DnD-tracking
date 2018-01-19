import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'items', component: ItemListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
