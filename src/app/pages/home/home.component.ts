import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat';
import { CatService } from 'src/app/services/cat.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  catList: Cat[] = [];
  constructor(
    private catService: CatService,
    private router: Router,
    private fb : FormBuilder) {
      this.form = this.fb.group({
        keyword: ['']
      })
    }

  ngOnInit(): void {
    this.getCatList();
  }

  // 고양이 리스트 조회
  getCatList() {
    this.catService.getCatList(this.form.value.keyword).subscribe((res: any) => { // TODO Type Error Check
      this.catList = res;
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
