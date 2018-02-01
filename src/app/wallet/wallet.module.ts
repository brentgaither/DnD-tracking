import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WalletComponent } from './wallet/wallet.component';
import { WalletService } from './shared/wallet.service';
import { WalletDetailComponent } from './wallet-detail/wallet-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [WalletComponent, WalletDetailComponent],
  providers: [WalletService]
})
export class WalletModule { }
