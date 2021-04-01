import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinPairComponent } from './money/coin-pair/coin-pair.component';
import { CoinComponent } from './money/coin/coin.component';
import { MoneyComponent } from './money/money.component';

const routes: Routes = [
  { path: 'money', component: MoneyComponent },
  { path: 'coin', component: CoinComponent },
  { path: 'coin-pair', component: CoinPairComponent },
  { path: '',   redirectTo: '/money', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
