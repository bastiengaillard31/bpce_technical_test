import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch } from '../models/launch';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  launchApiUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming?limit=50';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Array<Launch>> {
    return this.http
      .get<{ results: Launch[] }>(
        this.launchApiUrl
      )
      .pipe(map((launches) => launches.results || []));
  }
}