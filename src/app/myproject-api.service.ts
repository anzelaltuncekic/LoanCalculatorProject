import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyprojectApiService {
  readonly MyprojectApiUrl = 'https://localhost:7221/api';

  constructor(private http: HttpClient) {}

  //Kredi Tipleri
  getKrediHesaplamaListesi(): Observable<any[]> {
    return this.http.get<any>(this.MyprojectApiUrl + '/kreditipleri');
  }

  addHesaplama(data: any) {
    return this.http.post(this.MyprojectApiUrl + '/kreditipleri', data);
  }
}
