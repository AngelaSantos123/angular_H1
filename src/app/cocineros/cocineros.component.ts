import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from '../historia/historia.component';
import { BibliografiaComponent } from '../bibliografia/bibliografia.component';
import { UtensiliosComponent } from '../utensilios/utensilios.component';
import { AlimentosComponent } from '../alimentos/alimentos.component';
import { Router } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-cocineros',
  standalone: true,
  imports: [CommonModule, HistoriaComponent, CocinerosComponent, BibliografiaComponent, 
    UtensiliosComponent, AlimentosComponent, PrincipalComponent],
  templateUrl: './cocineros.component.html',
  styleUrl: './cocineros.component.css'
})
export class CocinerosComponent {
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
