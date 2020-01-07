import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';

import { ViewsService, IAppEvent } from '../views.service';
import { AppSeoService } from 'src/app/services/app-seo.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  event: IAppEvent;
  paramsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private viewService: ViewsService,
    private seoService: AppSeoService,
  ) { }

  ngOnInit() {
    this.viewService.getCurrentEvent().subscribe(x => {
      if (x !== undefined) {
        this.event = x;
        this.seoService.setOpenGraphMetaTags(this.event);
      }
    });
    this.paramsSubscription = this.activatedRoute.paramMap
      .pipe(
        tap(params => {
          this.viewService.getAppEventById(params.get('id'));
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
