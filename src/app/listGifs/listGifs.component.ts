import { Component, OnInit } from '@angular/core';
import {MemesService} from "../services/MemesService";

export interface MemeInterface {
  box_count: number;
  height:number;
  id: string;
  name: string;
  url: string;
  width: number
}
@Component({
  selector: 'app-listGifs',
  templateUrl: './listGifs.component.html',
  styleUrls: ['./listGifs.component.scss']
})
export class ListGifsComponent implements OnInit {

  gifs: Array<any> = [];

  constructor(private memesService: MemesService) {
    this.getGifs();
  }

  ngOnInit(): void {
  }


  getGifs() {
    this.memesService.getGifs().subscribe(res => {
      this.gifs = res.results || [];
      console.log('res', res);
    })
  }
}
