import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// root injectorにserviceを登録している
//   root injectorを継承しているコンポーネントでサービスを初期化すると、
//   同一のインスタンスを扱う
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: heroesを取得した後にメッセージを追加する
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
