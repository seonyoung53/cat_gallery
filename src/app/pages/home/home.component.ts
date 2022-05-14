import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat';
import { CatService } from 'src/app/services/cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  catList: Cat[] = [];
  constructor(private catService: CatService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCatList();
  }

  // 고양이 리스트 조회
  getCatList() {
    this.catService.getCatsListMock().subscribe((res: any) => {
      this.catList = res?.data;
    })
  }

  // 상세 조회 페이지로 이동
  moveCatDetail(cat: Cat) {
    const params = {
      id: cat.id,
      name: cat.name,
      image: cat.image?.url
    }    
    this.router.navigate(['/detail'], {queryParams: params})
  }

}
