import { Component, OnInit } from '@angular/core';
import {LatLngLiteral} from "@agm/core";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent implements OnInit {
  lat: number =  30.508302;
  lng: number = -97.6825;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {
  }

  centerChange(event: LatLngLiteral) {
    console.log('center change', event);
  }

}
