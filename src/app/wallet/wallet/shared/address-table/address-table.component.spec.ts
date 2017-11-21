import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdSnackBarModule } from '@angular/material';

import { SharedModule } from '../../../shared/shared.module';
import { WalletModule } from '../../../wallet/wallet.module';
import { RpcModule } from '../../../../core/rpc/rpc.module';

import { FlashNotificationService } from '../../../services/flash-notification.service';
import { ModalsService } from '../../../modals/modals.service';

import { AddressTableComponent } from './address-table.component';
import { IpcService } from '../../../../core/ipc/ipc.service';

describe('AddressTableComponent', () => {
  let component: AddressTableComponent;
  let fixture: ComponentFixture<AddressTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        WalletModule.forRoot(),
        RpcModule.forRoot(),
        MdSnackBarModule
      ],
      providers: [ FlashNotificationService, ModalsService, IpcService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should changePage', () => {
    // component.pageChanged();
    expect(component.pageChanged).toBeTruthy();
  });
*/
  it('should get addressService', () => {
    expect(component._addressService).toBeDefined();
  });
});
