import { Component, OnInit } from '@angular/core';
import { ServicesPokeService } from 'src/app/Core/services/services-poke.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor(
    private _poke : ServicesPokeService
  ) { }

  ngOnInit(): void {
    this._poke.getPokeAll().subscribe(
  		(response:any) =>{
  		 console.log("respondio")
          
  		},
  		(error:any)=>{
          console.log("No se obtiene datos de la pokeApi"+error);
  		});
  }

}
