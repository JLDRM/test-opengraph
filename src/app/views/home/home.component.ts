import { Component, OnInit } from '@angular/core';
import { AppSeoService } from 'src/app/services/app-seo.service';
import { IAppEvent } from '../views.service';

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
    const cleanOG: IAppEvent = { id: 0, name: 'Random1', image: 'default', type: 'default', title: 'default', description: 'default', url: 'default' };
    this.seoService.setTitleAndDescription(cleanOG);
    this.seoService.setOpenGraphMetaTags(cleanOG);
  }
}
