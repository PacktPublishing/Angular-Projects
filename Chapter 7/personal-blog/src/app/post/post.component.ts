import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from '../core/wordpress.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SeoService } from '../seo.service';

@Component({
  selector: 'pb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$ = this.wordpressService.post$.pipe(tap((post) => {
    this.seoService.setData({
      title: `${post.title.rendered} - Posts - ${environment.seo.title}`,
      description: post.excerpt.rendered,
      url: environment.url + this.router.routerState.snapshot.url,
      type: 'article',
      author: environment.seo.author,
      published: post.date as string,
      modified: post.modified as string,
    });
  }));

  constructor(
    private route: ActivatedRoute,
    private wordpressService: WordpressService,
    private seoService: SeoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.wordpressService.getPost(params.id);
    });
  }

}
