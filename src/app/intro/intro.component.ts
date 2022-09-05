import { SongsService } from './../songs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  songs:any;
  loading = false;
  data:any;
  obsSongs:any;

  constructor(private service:SongsService) { }

  ngOnInit(): void {

  }
  getAllSongs(){
    this.songs = this.service.getSongs();
    this.obsSongs = from (this.songs)



      this.obsSongs.subscribe({
        next: (data:any) => this.data = data,
        error: error => this.data =error,
        complete: () => this.data "complete..."
      });

    }

  }


