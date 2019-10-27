import { Component, OnInit } from '@angular/core';
import { MultimediaService } from './../services/multimedia.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {

  constructor( private _multimediaService: MultimediaService) {
  }

  ngOnInit() {
    this._multimediaService.listarMedia()
    .subscribe(
      (data) => {
        // localStorage.setItem('', JSON.stringify(data));
        //  alert("DATA: "+JSON.stringify(data))
      },

      (error) => {
        console.error(error);
      }
    );
  }

}
