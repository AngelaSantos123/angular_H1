import { Component } from '@angular/core';
import { HistoriaComponent } from '../historia/historia.component';
import { CocinerosComponent } from '../cocineros/cocineros.component';
import { UtensiliosComponent } from '../utensilios/utensilios.component';
import { AlimentosComponent } from '../alimentos/alimentos.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-bibliografia',
  standalone: true,
  imports: [CommonModule, HistoriaComponent, CocinerosComponent, BibliografiaComponent, 
    UtensiliosComponent, AlimentosComponent, PrincipalComponent],
  templateUrl: './bibliografia.component.html',
  styleUrl: './bibliografia.component.css'
})
export class BibliografiaComponent {
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
