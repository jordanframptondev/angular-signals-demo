import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.sass']
})
export class NavHeaderComponent implements OnInit {

  @Input() websiteName: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
