import { Component, OnInit } from '@angular/core';
import { ServicesPokeService } from 'src/app/Core/services/services-poke.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  private generate :number;
  private mostrar :number;
  public pokemones: any;
  constructor(
    private _poke : ServicesPokeService
  ) { 
    this.generate=0;
    this.mostrar=0;
    this.pokemones= [];
  }

  ngOnInit(): void {
     let a = Math.floor(Math.random() * (152 - 1)) + 1;
     let b =a+12;
    
     for(let i=a;i<b;i++){     

    this._poke.getPokeAll(a).subscribe(
  		(response:any) =>{
       let pokemon = {
        imgJuego: response.sprites.front_default,
        imgCvg: response.sprites.other.dream_world.front_default,
        nombre: response.name,
        experiencia: response.base_experience,
        ataque: response.stats[1].base_stat,
        defensa: response.stats[2].base_stat,
        especial: response.stats[3].base_stat,
      };

      console.log("Prueba de respuesta",pokemon);

      this.pokemones.push(pokemon);
          
  		},
  		(error:any)=>{
          console.log("No se obtiene datos de la pokeApi"+error);
  		});
      a=a+1;
    }

    console.log("arrelgo pokemones", this.pokemones)
  }

}
