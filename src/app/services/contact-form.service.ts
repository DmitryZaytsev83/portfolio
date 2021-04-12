import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface ContactData {
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private url = '/api/message';

  constructor(private http: HttpClient) {
  }

  sendFormData(data: ContactData): Observable<any> {
    return this.http.post(this.url, data);
  }
}
