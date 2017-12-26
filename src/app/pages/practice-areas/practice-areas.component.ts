import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.less']
})
export class PracticeAreasComponent implements OnInit {
  selected: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.selected = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(paramMap => {
      this.selected = paramMap.get('id');
    });
  }

}
