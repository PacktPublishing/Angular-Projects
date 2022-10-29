import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';

@Component({
	selector: "Detail",
	moduleId: module.id,
	templateUrl: "./detail.component.html",
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	currentNews = {};

	constructor(private route: ActivatedRoute,
		private appService: AppService
	) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.getNews(params.id);
		});
	}

	getNews(id) {
		const data = this.appService.news;
		this.currentNews = data.find(item => id == item.source.id);
	}
}