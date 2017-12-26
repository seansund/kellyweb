import { Component, OnInit } from '@angular/core';

class PracticeArea {
  label: string;
  link: string;
  icon?: string;
}

@Component({
  selector: 'app-practice-menu',
  templateUrl: './practice-menu.component.html',
  styleUrls: ['./practice-menu.component.less']
})
export class PracticeMenuComponent implements OnInit {
  baseLink: string = '/practice-area';
  practiceAreas: PracticeArea[];

  constructor() { }

  ngOnInit() {
    this.practiceAreas = [
      {label: 'Divorce', link: '/divorce', icon: 'glyphicon glyphicon-ban-circle'},
      {label: 'Child Custody & Visitation', link: '/child-custody', icon: 'glyphicon glyphicon-user'},
      {label: 'Child Support', link: '/child-support', icon: 'glyphicon glyphicon-piggy-bank'},
      {label: 'Modifications', link: '/modifications', icon: 'glyphicon glyphicon-pencil'},
      {label: 'Enforcement', link: '/enforcement', icon: 'glyphicon glyphicon-usd'},
      {label: 'Adoption', link: '/adoption', icon: 'glyphicon glyphicon-plus'},
      {label: 'Guardianship', link: '/guardianship', icon: 'glyphicon glyphicon-plus'},
      {label: 'Probate', link: '/probate', icon: 'glyphicon glyphicon-plus'},
      {label: 'Wills & Trusts', link: '/wills-trusts', icon: 'glyphicon glyphicon-plus'}
    ];
  }

}
