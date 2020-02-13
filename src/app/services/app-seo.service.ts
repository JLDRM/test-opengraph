import { Injectable, OnDestroy } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
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
    private title: Title,
    private meta: Meta,
  ) { }

  setTitleAndDescription(event: IAppEvent) {
    this.title.setTitle(event.title);
    this.meta.updateTag({ name: 'description', content: event.description})
  }
  setOpenGraphMetaTags(event: IAppEvent) {
    const formatedMetaInfo: MetaDefinition[] = [
      { property: 'og:title', content: event.title },
      { property: 'og:url', content: event.url },
      { property: 'og:image', content: event.image },
      { property: 'og:type', content: event.type }
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
