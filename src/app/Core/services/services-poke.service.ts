import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesPokeService {

  constructor(
    private _http: HttpClient
  ) { }

  getPokeAll():any{
  	return this._http.get("http://pokeapi.co/api/v2/pokemon?limit=200&offset=1");
  }

  getPoke(data:any):any{
  	return this._http.get(`${data}`);
  }   
}
