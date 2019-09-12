import { TestBed } from '@angular/core/testing';

import { BehanceService } from './behance.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment.prod';

describe('BehanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BehanceService = TestBed.get(BehanceService);
    expect(service).toBeTruthy();
  });

  it('should call posts api', () => {
    const response = 'response';
    const service: BehanceService = TestBed.get(BehanceService);
    const httpMock = TestBed.get(HttpTestingController);
    service.getPosts().subscribe(data => {
      expect(data).toEqual(response);
    });
    const req = httpMock.expectOne(
      (request: any) => {
        return request.url === environment.api + 'collections/170716829/projects?per_page=20&page=' + 1 + '&api_key=' + environment.token;
      }
    );
    expect(req.request.method).toEqual('JSONP');
    req.flush(response);

  });

  it('should call post api', () => {
    const id = 'id';
    const response = 'response';
    const service: BehanceService = TestBed.get(BehanceService);
    const httpMock = TestBed.get(HttpTestingController);
    service.getPost(id).subscribe(data => {
      expect(data).toEqual(response);
    });
    const req = httpMock.expectOne(
      (request: any) => {
        return request.url === environment.api + 'projects/' + id + '?api_key=' + environment.token;
      }
    );
    expect(req.request.method).toEqual('JSONP');
    req.flush(response);

  });
});
