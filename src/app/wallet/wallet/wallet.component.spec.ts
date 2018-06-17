import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { WalletComponent } from './wallet.component';
import { WalletService } from '../shared/wallet.service';
import { Wallet } from '../shared/wallet.model';
import { MaterialModule } from '../../material/material.module';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;
  let componentWalletService: WalletService; // the actually injected service
  let walletService: WalletService; // the TestBed injected service
  let walletServiceStub;

  beforeEach(async(() => {
    walletServiceStub = {
      getWallet(id: number) {return Observable.of(new Wallet()); },
    };
    TestBed.configureTestingModule({
      imports: [ FormsModule, MaterialModule ],
      declarations: [ WalletComponent ],
      providers: [
        {provide: WalletService, useValue: walletServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    walletService = fixture.debugElement.injector.get(WalletService);
    componentWalletService = walletService;
    // WalletService from the root injector
    walletService = TestBed.get(WalletService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
