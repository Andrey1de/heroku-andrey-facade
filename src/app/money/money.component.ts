import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../shared/coins.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {

  constructor(public readonly  data: CoinsService) { }

  ngOnInit(): void {
  }

}
