import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }
    language = "english";
    news;

    getUrl() {
		if (this.language === "English") {
			return "https://demo7831153.mockable.io/en";
		}

		return "https://demo7831153.mockable.io/es";
	}

    getNews() {
        const url = this.getUrl();
        return this.http.get(url).pipe(
            tap((news: any) => this.news = news.articles),
        );
    }
}