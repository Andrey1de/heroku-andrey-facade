import { Injectable } from '@angular/core';
import {environment as env} from '../../environments/environment'

export class Coin {
  constructor(
    public name : string ,
    public toUsd : number,
    public country : string ,
    public updated  : Date  = new Date('2020-01-01'),
    public valid : boolean = true) {
      this.name = ('' + this.name).toUpperCase().trim().substr(0.3)
 }
  public updatedStr () : string { return dateToStr(this.updated);}

}

export class CoinPair{
  get ratio (){ 
    return this.from.toUsd / this.to.toUsd;
  }
  updatedStr () { return dateToStr(this.updated);}

  public readonly pair ;
  public updated : Date ;
  public valid: boolean = true;
  public active : boolean = false;
  constructor(public readonly from : Coin, 
      public readonly to : Coin) {
     this.pair = this.from.name + '-' + this.to.name;
     this.updated = (this.from.updated.getTime( )> this.to.updated.getTime() )
                 ? this.from.updated: this.to.updated; 
  }
}

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  public Coins : Coin[] =  [] ;
  public CoinPairs : CoinPair[] =  [] ;

   constructor() { 
     if(env.isMOK) {
      this.Coins =  COINS_MOCK;
      }
       this.Coins.sort();
     
      this.fillPairs();
    }
  fillPairs() {
    if(env.isMOK){
      const arrPairs = env.pairs.split(',');
      arrPairs.forEach(pair => {
        pair = pair.trim();
        let [_from,_to] = pair.split('-');
        let from = this.getCoin(_from);
        let to = this.getCoin(_to);
        if(from && to){
            this.CoinPairs = [... this.CoinPairs, 
              new CoinPair(from,to)];

        }

        
      });
    }
  }
  getCoin(name : string) : Coin | undefined {
    name = ('' + name).toUpperCase().trim().substr(0,3);
    return this.Coins.find(c=>c.name == name);
  }

  get envPairs() {return env.pairs;}

}



export const COINS_MOCK : Coin[]= [
  new Coin('USD', 1.0 ,     'USA',    new Date('2021-02-11')),
  new Coin('GBP', 1.33 ,    'UK',     new Date('2021-02-21')),
  new Coin('RUB', (1/75) ,  'Russia', new Date('2021-02-18')),
  new Coin('CNJ', (1 / 6.8),'China',  new Date('2021-02-17')),
  new Coin('JPY', (1/108) , 'Japan',  new Date('2021-02-18')),
  new Coin('EUR', 1.22 ,    'Europe', new Date('2021-02-19')),
  new Coin('ILS', (1/3.5) ,  'Israel', new Date('2021-02-25')),
 
];

function dateToStr( date : Date | undefined ) : string{
  if(!date) return '';
  return date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
    }).replace(/ /g, '-')
};