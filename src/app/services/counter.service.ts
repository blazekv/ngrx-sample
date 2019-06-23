import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private http: HttpClient) { }

  public load() {
    return this.http.get('http://private-68a76-ngrxsample.apiary-mock.com/counter').pipe(
        map((data: any) => data.value)
    );
  }

  public save(value: number) {
    return this.http.put('http://private-68a76-ngrxsample.apiary-mock.com/counter', {value});
  }
}
