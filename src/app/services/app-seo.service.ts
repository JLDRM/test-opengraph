import { Injectable, OnDestroy } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { IAppEvent } from '../views/views.service';

@Injectable({
  providedIn: 'root'
})
export class AppSeoService implements OnDestroy {

  htmlTag: HTMLElement;
  head: HTMLHeadElement;

  private serviceDestroyed: Subject<boolean> = new Subject();

  constructor(
    private meta: Meta,
  ) { }

  setOpenGraphMetaTags(metaInfo: IAppEvent) {
    const formatedMetaInfo: MetaDefinition[] = [
      { property: 'og:title', content: metaInfo.title },
      { property: 'og:url', content: metaInfo.url },
      { property: 'og:image', content: metaInfo.image },
      { property: 'og:type', content: metaInfo.type }
    ];
    formatedMetaInfo.forEach(x => {
      this.meta.updateTag(x);
    });
  }

  getHead(): HTMLHeadElement {
    let head: HTMLHeadElement;
    Array.prototype.forEach.call(this.htmlTag.childNodes, (node: any) => {
      if (node instanceof HTMLHeadElement) {
        head = node;
      }
    });
    return head;
  }

  ngOnDestroy(): void {
    this.serviceDestroyed.next(true);
    this.serviceDestroyed.complete();
  }
}
