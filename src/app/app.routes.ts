import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { HistoriaComponent } from './historia/historia.component';
import { CocinerosComponent } from './cocineros/cocineros.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { UtensiliosComponent } from './utensilios/utensilios.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/principal', pathMatch:'full' }, // Para que siempre empiece en esta página por defecto
    { path: 'principal', component: PrincipalComponent},     // Para que te redirija a la principal
    { path: 'historia', component: HistoriaComponent },     // Para que te redirija a cada una de las páginas
    { path: 'cocineros', component: CocinerosComponent },
    { path: 'bibliografia', component: BibliografiaComponent },
    { path: 'utensilios', component: UtensiliosComponent },
    { path: 'alimentos', component: AlimentosComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { 

}