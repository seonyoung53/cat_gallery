import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  catDetail!: Cat;
  heart = false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param: any) => {
      this.catDetail = param;
    })
   }

  ngOnInit(): void {
  }

  // 좋아요 클릭
  clickHeart() {
    this.heart = this.heart ? false : true;
  }

}
