import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../core/wordpress.service';
import { postsAnimation } from '../animations';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    postsAnimation
  ]
})
export class HomeComponent implements OnInit {
  posts$ = this.wordpressService.getPosts();

  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
  }

}
