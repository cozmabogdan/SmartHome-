import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'Camera', isOnline: true},
  {id: 2, name: 'Lampa', isOnline: false}
]

@Component({
  selector: 'app-section-dormitor',
  templateUrl: './section-dormitor.component.html',
  styleUrls: ['./section-dormitor.component.css']
})
export class SectionDormitorComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit(): void {
  }

}
