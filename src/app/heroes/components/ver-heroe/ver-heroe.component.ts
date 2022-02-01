import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-ver-heroe',
  templateUrl: './ver-heroe.component.html',
  styleUrls: ['./ver-heroe.component.css']
})
export class VerHeroeComponent implements OnInit {

  heroes:any[] = [];
  heroe: any | undefined;

  constructor(private heroeService:HeroeService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroeService.getHeroes().subscribe(
      heroes => {
        this.heroes = Object.values(heroes)
        this.heroe = this.heroes
        console.log(this.heroes[0]);
      }  
    )
  }

}
