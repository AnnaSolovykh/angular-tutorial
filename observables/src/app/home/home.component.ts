import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstOnsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstOnsSubscription = interval(1000).subscribe(count => {
    // console.log(count)
    // })
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        count++;
        if (count > 3) {
          observer.error(new Error("Count is more than 3"))
        }
      }, 1000)
    });
    this.firstOnsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, (error: any) => {
      alert(error.message)
    }, () => {
      console.log('Completed!')
    })
  }
  ngOnDestroy(): void {
    this.firstOnsSubscription.unsubscribe();
  }
}
