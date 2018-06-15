import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallbackComponent } from './callback/callback.component';
import { WalletComponent } from './wallet/wallet/wallet.component';
import { WalletDetailComponent } from './wallet/wallet-detail/wallet-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { DiaryListComponent } from './diary/diary-list/diary-list.component';
import { DiaryDetailComponent } from './diary/diary-detail/diary-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'item/detail/:id', component: ItemDetailComponent },
  { path: 'diary', component: DiaryListComponent },
  { path: 'diary/detail/:id', component: DiaryDetailComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'wallet/detail', component: WalletDetailComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
