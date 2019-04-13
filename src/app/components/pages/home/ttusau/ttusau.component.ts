import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttusau',
  templateUrl: './ttusau.component.html',
  styleUrls: ['./ttusau.component.css']
})
export class TtusauComponent implements OnInit {
  data: any[] = [];
  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        id: 1,
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        star: 150,
        like: 99,
        isComment: false, //
        isLike: false, // 是否start
        isCollect: false,// 是否收藏
        commentNum: 119,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }
  // 点击star
  actionStart(id: number): void{
    console.log('start',id);

  }
  // 点击评论
  actionComment(item): void{
    console.log(item);
    item.isComment = true;
  }
  // 点击
  constructor() { }

  ngOnInit() {
    this.loadData(1);
  }
}
