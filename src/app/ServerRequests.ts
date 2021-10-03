import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerRequests {
  loading = true;

  constructor(private http: HttpClient) {}

  getMatches(name: any) {
    return this.http.get('http://192.168.1.100:105/getmatches/' + name);
  }
  getUserData(name: any) {
    return this.http.get('http://192.168.1.100:105/getuser/' + name);
  }
  getProfiles(name: any) {
    return this.http.get('http://192.168.1.100:105/getprofiles/');
  }
  setProfile(name: any, body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'authkey',
      userid: '1',
    });
    return this.http.post('http://192.168.1.100:105/setuser/' + name, body, {
      headers: headers,
    });
  }
}
