import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'Ambiental TV', isOnline: true},
  {id: 2, name: 'Lumina', isOnline: false}
]

@Component({
  selector: 'app-section-sufragerie',
  templateUrl: './section-sufragerie.component.html',
  styleUrls: ['./section-sufragerie.component.css']
})
export class SectionSufragerieComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit(): void {
  }

}
