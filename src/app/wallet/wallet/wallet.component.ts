import { Component, OnInit, Input } from '@angular/core';
import { WalletService } from '../shared/wallet.service';
import { Wallet } from '../shared/wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private walletService: WalletService) { }

  @Input() wallet: Wallet;

  ngOnInit() {
    if (!this.wallet) {
      this.getWallet();
    }
  }

  getWallet(): void {
    this.walletService.getWallet()
        .subscribe(wallet => this.wallet = wallet );
  }

}
