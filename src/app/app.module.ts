import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Http, RequestOptions } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRippleModule, MatCard,
  MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';


import { AppRoutingModule } from './/app-routing.module';
import { DiaryModule } from './diary/diary.module';
import { ItemModule } from './item/item.module';
import { WalletModule } from './wallet/wallet.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyHttpInterceptor } from './my-http-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CallbackComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRippleModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    ItemModule,
    WalletModule,
    DiaryModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
  providers: [AuthService,
  {
  provide: HTTP_INTERCEPTORS,
  useClass: MyHttpInterceptor,
  multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
