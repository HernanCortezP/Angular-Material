import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../../services/photos.service';
import { Photo } from 'src/app/models/Photo';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  Fotos: Photo[] = [];
  albumsId = [1, 2, 3];

  constructor(public servicioFotos: PhotosService) { }

  ngOnInit() {
    this.servicioFotos.ObtenerFotos()
    .subscribe(
      photos => {
        console.log(photos);
        this.Fotos = photos;
      },
      err => console.log(err)
    );

  }

  click(): void {
    alert('Works!');
  }

}
