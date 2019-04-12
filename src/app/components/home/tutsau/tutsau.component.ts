import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutsau',
  templateUrl: './tutsau.component.html',
  styleUrls: ['./tutsau.component.css']
})
export class TutsauComponent implements OnInit {
  data: any[] = [];
  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        id: 1,
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        star: 150,
        like: 99,
        isComment: false,
        commentNum: 119,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }
  actionComment(item): void{
    console.log(item);
    item.isComment = true;
  }
  constructor() { }

  ngOnInit() {
    this.loadData(1);
  }
}
