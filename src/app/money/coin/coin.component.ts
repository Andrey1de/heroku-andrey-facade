import { Component, OnInit } from '@angular/core';
import { Coin, CoinsService } from 'src/app/shared/coins.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  
  constructor(public data : CoinsService) { }

  ngOnInit(): void {
  }

}

