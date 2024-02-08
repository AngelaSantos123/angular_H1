import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from '../historia/historia.component';
import { CocinerosComponent } from '../cocineros/cocineros.component';
import { BibliografiaComponent } from '../bibliografia/bibliografia.component';
import { UtensiliosComponent } from '../utensilios/utensilios.component';
import { Router } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [CommonModule, HistoriaComponent, CocinerosComponent, BibliografiaComponent, 
    UtensiliosComponent, AlimentosComponent, PrincipalComponent],
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.css'
})
export class AlimentosComponent {
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
