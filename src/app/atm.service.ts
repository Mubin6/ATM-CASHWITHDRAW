import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
  private readonly userUrl = `../assets/json/user.json`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get(this.userUrl);
  }
}
