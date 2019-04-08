import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() ISLOGIN: boolean = false; // 登录状态默认为false
  @Input() navList: object []; // 导航列表
  constructor() { }

  ngOnInit() {

  }

}
