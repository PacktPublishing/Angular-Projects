import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'https://demo7831153.mockable.io';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }
    language = "English";
    news;

    getUrl() {
		if (this.language === 'English') {
			return `${API_URL}/en`;
		}

		return `${API_URL}/es`;
	}

    getNews() {
        const url = this.getUrl();
        return this.http.get(url).pipe(
            tap((news: any) => this.news = news.articles),
        );
    }
}