import { Component, OnInit } from '@angular/core';
import { AppSeoService } from 'src/app/services/app-seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private seoService: AppSeoService
  ) { }

  ngOnInit() {
    const cleanOG = { id: 0, name: 'Random1', image: 'default', type: 'default', title: 'default', url: 'default' };
    this.seoService.setOpenGraphMetaTags(cleanOG);
  }
}
