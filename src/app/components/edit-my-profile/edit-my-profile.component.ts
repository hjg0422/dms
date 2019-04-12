import {
  Component,
  OnInit
} from '@angular/core';
import {
  professionalList,
  dormInfoList
} from './select-options'
@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.css']
})
export class EditMyProfileComponent implements OnInit {
  professionalList = professionalList;
  dormInfoList = dormInfoList;
  professionalValues: any[] | null = null;
  dormInfoValues: any[] | null = null;
  onChanges(values: any): void {
    console.log(values);
  }

  constructor() {}

  ngOnInit() {}

}
