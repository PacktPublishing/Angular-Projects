import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SeoService } from './seo.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RouteHelperService {

constructor(
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private seoService: SeoService
) {
  this.setupRouting();
}

private setupRouting() {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    filter(route => route.outlet === 'primary'),
  ).subscribe((route: ActivatedRoute) => {
    const seo = route.snapshot.data.seo;
    this.seoService.setData({
      title: seo.title,
      description: seo.description,
      image: seo.shareImg,
      author: environment.seo.author,
      url: environment.url + this.router.routerState.snapshot.url,
      type: 'website',
    });
  });
}

}
