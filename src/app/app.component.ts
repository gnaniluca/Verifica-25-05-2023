import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Streaming } from './models/streaming.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  
  data:Streaming;
  oStreaming:Observable<Streaming>
  url="https://my-json-server.typicode.com/paolocarugati/sputifai/db";

  constructor(public http:HttpClient){
    this.oStreaming=http.get<Streaming>(this.url);
    this.oStreaming.subscribe(d=>this.data = d);
  }
  
}
