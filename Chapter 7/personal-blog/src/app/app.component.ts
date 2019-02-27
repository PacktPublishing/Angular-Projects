import { isPlatformBrowser , DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';
import { Component , OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { routerTransition } from './animations';
import { RouteHelperService } from './route-helper.service';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition
  ]
})
export class AppComponent implements OnInit {
  title = 'personal-blog';

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            const bases = this.document.getElementsByTagName('base');
            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    }

 constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, routeHelper: RouteHelperService) {}

  getOutlet(o) {
    return o.activatedRouteData.routeState;
}
}
