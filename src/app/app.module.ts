import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoneyComponent } from './money/money.component';
import { CoinComponent } from './money/coin/coin.component';
import { CoinPairComponent } from './money/coin-pair/coin-pair.component';
import { CoinsService } from './shared/coins.service';

@NgModule({
  declarations: [
    AppComponent,
    MoneyComponent,
    CoinComponent,
    CoinPairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
