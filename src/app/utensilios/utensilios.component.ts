import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from '../historia/historia.component';
import { CocinerosComponent } from '../cocineros/cocineros.component';
import { BibliografiaComponent } from '../bibliografia/bibliografia.component';
import { AlimentosComponent } from '../alimentos/alimentos.component';
import { Router } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-utensilios',
  standalone: true,
  imports: [CommonModule, HistoriaComponent, CocinerosComponent, BibliografiaComponent, 
    UtensiliosComponent, AlimentosComponent, PrincipalComponent],
  templateUrl: './utensilios.component.html',
  styleUrl: './utensilios.component.css'
})
export class UtensiliosComponent {
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
