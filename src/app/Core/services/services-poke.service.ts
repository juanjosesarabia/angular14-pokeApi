import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesPokeService {

  constructor(
    private _http: HttpClient
  ) { }

  getPokeAll(id:number):any{
  	return this._http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPoke(data:any):any{
  	return this._http.get(`${data}`);
  }   
}
