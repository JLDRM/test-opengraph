import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';



export interface IAppEvent {
  id: number;
  name: string;
  title: string;
  type: string;
  image: string;
  url: string;
}
export const eventosMock: IAppEvent[] = [
  {
    id: 1, name: 'Random1', image: environment.URI + 'assets/random1.png',
    type: 'website', title: 'The Random 1 Event', url: environment.URI + 'events/1'
  },
  {
    id: 2, name: 'Random2', image: environment.URI + 'assets/random2.jpg',
    type: 'website', title: 'The Random 2 Event', url: environment.URI + 'events/2'
  },
  {
    id: 3, name: 'Random3', image: environment.URI + 'assets/random3.jpg',
    type: 'website', title: 'The Random 3 Event', url: environment.URI + 'events/3'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  events: IAppEvent[] = eventosMock;
  currentEvent: Subject<IAppEvent> = new Subject();

  constructor() { }

  getAppEventById(id: string): void {
    this.events.forEach(x => {
      if (x.id.toString() === id) {
        this.currentEvent.next(x);
      }
    });
  }

  getCurrentEvent() {
    return this.currentEvent.asObservable();
  }
}
