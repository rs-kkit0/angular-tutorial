import { Component, OnInit, SkipSelf, TrackByFunction } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { of } from 'rxjs';

interface Country {
  id: number;
  name: string;
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (e: ControlContainer) => e,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class AddressFormComponent implements OnInit {
  readonly countries = of([{ id: 1, name: 'US'}, { id: 2, name: 'France'}, { id: 3, name: 'Japan' }]);
  readonly trackById: TrackByFunction<Country> = (_, country: Country): number => country.id;

  constructor() { }

  ngOnInit(): void {
  }

}
