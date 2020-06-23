import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component'
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'produit', pathMatch: 'full' },
  { path: 'produits', component: ListProduitComponent },
  { path: 'add', component: AjouterProduitComponent },
  { path: 'liste', component: UpdateProduitComponent },
  { path: 'details', component:  DetailsProduitComponent },
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
