import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { WalletDetailComponent } from './wallet-detail.component';
import { WalletService } from '../shared/wallet.service';
import { WalletComponent } from '../wallet/wallet.component';
import { Wallet } from '../shared/wallet.model';
import { MatCardModule, MatIconModule, MatFormFieldModule, MatChipsModule, MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('WalletDetailComponent', () => {
  let component: WalletDetailComponent;
  let fixture: ComponentFixture<WalletDetailComponent>;
  let componentWalletService: WalletService; // the actually injected service
  let walletService: WalletService; // the TestBed injected service
  let walletServiceStub;

  beforeEach(async(() => {
    walletServiceStub = {
      getWallet(id: number) {return Observable.of(new Wallet()); },
    };
    TestBed.configureTestingModule({
      imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatButtonModule, BrowserAnimationsModule],
      declarations: [ WalletDetailComponent, WalletComponent ],
      providers: [
        {provide: WalletService, useValue: walletServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletDetailComponent);
    component = fixture.componentInstance;
    walletService = fixture.debugElement.injector.get(WalletService);
    componentWalletService = walletService;
    // ItemService from the root injector
    walletService = TestBed.get(WalletService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
