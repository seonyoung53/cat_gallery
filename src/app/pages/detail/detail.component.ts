import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  catDetail!: Cat;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param: any) => {
      this.catDetail = param;
    })
   }

  ngOnInit(): void {
  }

}
