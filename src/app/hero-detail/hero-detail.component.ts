import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    // componentのインスタンスへのルートに関する情報を保持
    private route: ActivatedRoute,
    private heroService: HeroService,
    // ブラウザと対話するためのAngular Service
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id =
      // route.snapshot: コンポーネントが作成された直後のルート情報の静的イメージ 
      // paramMap: URLから抽出されたパラメータ値
      +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(res => this.hero = res);
  }

  goBack(): void {
    this.location.back();
  }

}
