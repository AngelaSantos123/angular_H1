import { Component } from '@angular/core';
import { PrincipalComponent } from '../principal/principal.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CocinerosComponent } from '../cocineros/cocineros.component';
import { BibliografiaComponent } from '../bibliografia/bibliografia.component';
import { UtensiliosComponent } from '../utensilios/utensilios.component';
import { AlimentosComponent } from '../alimentos/alimentos.component';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule, HistoriaComponent, CocinerosComponent, BibliografiaComponent, 
    UtensiliosComponent, AlimentosComponent, PrincipalComponent],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {
  constructor(private router: Router) {}
  
  principal(){
    this.router.navigate(['./principal']);
  }
  
  historia(){
    this.router.navigate(['./historia']);
  }
  cocineros() {
    this.router.navigate(['./cocineros']);
  }
  bibliografia() {
    this.router.navigate(['./bibliografia']);
  }
  utensilios() {
    this.router.navigate(['./utensilios']);
  }
  alimentos() {
    this.router.navigate(['./alimentos']);
  }

}
