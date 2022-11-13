import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class MemesService {

  constructor(private http: HttpClient) { }

  getMemes(): Observable<any> {
    return this.http.get('https://api.imgflip.com/get_memes');
  }

  getGifs(): Observable<any> {
    return this.http.get('https://g.tenor.com/v1/search?key=LIVDSRZULELA&limit=8');
  }
  // https://g.tenor.com/v1/search?key=LIVDSRZULELA&limit=8
}
