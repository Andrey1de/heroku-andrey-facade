import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/shared/coins.service';

@Component({
  selector: 'app-coin-pair',
  templateUrl: './coin-pair.component.html',
  styleUrls: ['./coin-pair.component.scss']
})
export class CoinPairComponent implements OnInit {

  constructor(public readonly  data: CoinsService) { }

  ngOnInit(): void {
  }

}
