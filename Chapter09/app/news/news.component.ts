import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
	selector: "News",
	moduleId: module.id,
	templateUrl: "./news.component.html",
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	selectedListPickerIndex: number = 0;

	public data;

	constructor(
		private appService: AppService
	) { }

	ngOnInit(): void {
		this.getData();
	}

	getData() {
		this.appService.getNews()
			.subscribe((response: any) => {
				this.data = response.articles;
			});
	}
}

