import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { WebapisService } from '../../services/webapi.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit{

  constructor(private webApiService : WebapisService){}

  ngOnInit(): void {

  }


}
