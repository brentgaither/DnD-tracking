import { Component, OnInit, Input, Output } from '@angular/core';
import { WalletService } from '../shared/wallet.service';
import { Wallet } from '../shared/wallet.model';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.css']
})
export class WalletDetailComponent implements OnInit {

  constructor(private walletService: WalletService) { }

  wallet: Wallet;

  ngOnInit() {
    this.getWallet();
  }

  getWallet(): void {
    this.walletService.getWallet(1) // Fake id until i create a login
        .subscribe(wallet => this.wallet = wallet );
  }

  save(): void {
    this.walletService.updateWallet(this.wallet).subscribe();
  }

}
