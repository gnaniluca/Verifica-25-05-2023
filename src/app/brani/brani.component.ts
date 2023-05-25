import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {  Brano } from '../models/streaming.model';

@Component({
  selector: 'app-brani',
  templateUrl: './brani.component.html',
  styleUrls: ['./brani.component.css']
})
export class BraniComponent {
  @Input() brani:Brano[];
  constructor(private router:Router){
    this.brani =this.router.getCurrentNavigation().extras.state as Brano[];

  }

}