import { Component, OnInit } from '@angular/core';
import { FilmService } from './film.service'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  filmList : Object[] = [];
  filmName : string;
  constructor(private filmService: FilmService) { }
  
  ngOnInit() {
    
    this.filmName = "Matrix";
    this.getFilms();
  }
  
  private getFilms(){
    if(!this.filmName) {return;}
    this.filmService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
    })
  }

}
