import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  // rxjsのsubject
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // 検索語をobservableストリームにpushする
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    // searchHeroesを呼ぶ前にrxjsのオペレーターをつなげることで、
    // リクエストの回数を抑える
    this.heroes$ = this.searchTerms.pipe(
      // 各キーストロークの後、検索前に300ms待つ
      debounceTime(300),

      // 直前の検索語と同じ場合は無視する
      distinctUntilChanged(),

      // 検索語が変わるたびに、新しいobservableにスイッチする
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
