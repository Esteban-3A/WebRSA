import { Injectable, OnInit } from '@angular/core';
import { HttpClient,  } from "@angular/common/http";
import { Observable, interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebapisService implements OnInit {


  ngOnInit(): void {

  }

  constructor(private httpClient: HttpClient) {}
}
