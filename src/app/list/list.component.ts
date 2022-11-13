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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  memes: Array<MemeInterface> = [];
  gifs: Array<any> = [];

  constructor(private memesService: MemesService) {
    this.getMemes();
    this.getGifs();
  }

  ngOnInit(): void {
  }

  getMemes() {
    this.memesService.getMemes().subscribe(res => {
      this.memes = res.data?.memes || [];
    })
  }

  getGifs() {
    this.memesService.getGifs().subscribe(res => {
      this.gifs = res.data?.memes || [];
      console.log('res', res);
    })
  }
}
