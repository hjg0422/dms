import { Component, OnInit } from '@angular/core';
// import navList from './config/pole-nav';// 根据当前登陆的角色
import judgleNav from './FUNCTIONS/jundle-pole';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "高校宿舍管理系统"
  navList: any[];
  ngOnInit() {
    this.navList = judgleNav(0); // 动态生成路由导航
  }
}