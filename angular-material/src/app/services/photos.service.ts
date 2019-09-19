import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Photo } from '../models/Photo';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }


  ObtenerFotos() {

    // lo que se espera a traves de esta peticion get es un arreglo de fotos
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');

  }
}
