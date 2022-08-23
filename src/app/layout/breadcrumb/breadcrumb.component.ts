import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
    $subscribe:Subscription;
    activeTitle = '';

  constructor(private readonly _router:Router) {
    this.activeTitle = this._router.url.split('/').pop()?.split('?')[0] as string;
  }

  ngOnInit(): void {
    this.getArguments();
  }

  getArguments() {
    this.$subscribe = this._router.events.pipe(
      filter((event:any)=>event instanceof NavigationEnd),
      map((event:NavigationEnd)=>{
        return event.url.split('/').pop()?.split('?')[0] as string;
      }))
      .subscribe(url=>{
        this.activeTitle =url;
      });
  }



  ngOnDestroy(): void {
    this.$subscribe.unsubscribe();
  }



}
