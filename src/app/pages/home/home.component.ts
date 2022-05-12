import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/common/response-container';
import { Cat } from 'src/app/models/Cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  catList: Cat[] = [];
  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.getCatList();
  }

  // 고양이 리스트 조회
  getCatList(): void {
    this.catService.getCatsListMock().subscribe((res: any) => {
      this.catList = res?.data;
    })
  }

}
