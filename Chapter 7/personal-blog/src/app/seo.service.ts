import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  section?: string;
  published?: string;
  modified?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor(
    private readonly metaService: Meta,
    private readonly titleService: Title,
  ) {
  }

  setData(data: SeoData) {
    this.setTitle(data.title);
    this.setMetaDescription(data.description);
    this.setUrl(data.url);
    this.setImage(data.image);
    this.setPublished(data.published);
    this.setModified(data.modified);
    this.setAuthor(data.author);
    this.setSection(data.section);
    this.setType(data.type);
  }

  setSection(newSection?: string) {
    if (newSection && newSection.length) {
      this.metaService.updateTag({name: 'article:section', content: newSection});
    } else {
      this.metaService.removeTag(`name='article:section'`);
    }
  }

  setTwitterSiteCreator(site?: string) {
    if (site && site.length) {
      this.metaService.updateTag({name: 'twitter:site', content: site});
      this.metaService.updateTag({name: 'twitter:creator', content: site});
    } else {
      this.metaService.removeTag(`name='twitter:site'`);
      this.metaService.removeTag(`name='twitter:creator'`);
    }
  }

  setTwitterCard(card?: string) {
    if (card && card.length) {
      this.metaService.updateTag({name: 'twitter:card', content: card});
    } else {
      this.metaService.removeTag(`name='twitter:card'`);
    }
  }

  setFbAppId(appId?: string) {
    if (appId && appId.length) {
      this.metaService.updateTag({property: 'fb:app_id', content: appId});
    } else {
      this.metaService.removeTag(`property='fb:app_id'`);
    }
  }

  private setTitle(title: string = '') {
    this.titleService.setTitle(title);
    if (title && title.length) {
      this.metaService.updateTag({name: 'twitter:title', content: title});
      this.metaService.updateTag({name: 'twitter:image:alt', content: title});
      this.metaService.updateTag({property: 'og:image:alt', content: title});
      this.metaService.updateTag({property: 'og:title', content: title});
      this.metaService.updateTag({name: 'title', content: title});
    } else {
      this.metaService.removeTag(`name='twitter:title'`);
      this.metaService.removeTag(`name='twitter:image:alt'`);
      this.metaService.removeTag(`property='og:image:alt'`);
      this.metaService.removeTag(`property='og:title'`);
      this.metaService.removeTag(`name='title'`);
    }
  }

  private setType(type?: string) {
    if (type && type.length) {
      this.metaService.updateTag({property: 'og:type', content: type});
    } else {
      this.metaService.removeTag(`property='og:type'`);
    }
  }

  private setMetaDescription(description?: string) {
    if (description && description.length) {
      this.metaService.updateTag({name: 'twitter:description', content: description});
      this.metaService.updateTag({property: 'og:description', content: description});
      this.metaService.updateTag({name: 'description', content: description});
    } else {
      this.metaService.removeTag(`name='twitter:description'`);
      this.metaService.removeTag(`property='og:description'`);
      this.metaService.removeTag(`name='description'`);
    }
  }

  private setImage(image?: string) {
    if (image && image.length) {
      this.metaService.updateTag({name: 'twitter:image', content: image});
      this.metaService.updateTag({property: 'og:image', content: image});
      this.metaService.updateTag({property: 'og:image:height', content: '630'});
    } else {
      this.metaService.removeTag(`name='twitter:image'`);
      this.metaService.removeTag(`property='og:image'`);
      this.metaService.removeTag(`property='og:image:height'`);
    }
  }

  private setUrl(url?: string) {
    if (url && url.length) {
      this.metaService.updateTag({property: 'og:url', content: url});
    } else {
      this.metaService.removeTag(`property='og:url'`);
    }
  }

  private setPublished(publishedDateString?: string) {
    if (publishedDateString) {
      const publishedDate = new Date(publishedDateString);
      this.metaService.updateTag({name: 'article:published_time', content: publishedDate.toISOString()});
      this.metaService.updateTag({name: 'published_date', content: publishedDate.toISOString()});
    } else {
      this.metaService.removeTag(`name='article:published_time'`);
      this.metaService.removeTag(`name='publication_date'`);
    }
  }

  private setModified(modifiedDateString?: string) {
    if (modifiedDateString) {
      const modifiedDate = new Date(modifiedDateString);
      this.metaService.updateTag({name: 'article:modified_time', content: modifiedDate.toISOString()});
      this.metaService.updateTag({name: 'og:updated_time', content: modifiedDate.toISOString()});
    } else {
      this.metaService.removeTag(`name='article:modified_time'`);
      this.metaService.removeTag(`name='og:updated_time'`);
    }
  }

  private setAuthor(author?: string) {
    if (author && author.length) {
      this.metaService.updateTag({name: 'article:author', content: author});
      this.metaService.updateTag({name: 'author', content: author});
    } else {
      this.metaService.removeTag(`name='article:author'`);
      this.metaService.removeTag(`name='author'`);
    }
  }
}
