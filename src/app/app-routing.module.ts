import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LatestupdatesComponent } from './latestupdates/latestupdates.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'latestupdates', component: LatestupdatesComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,
                                   ServicesComponent,
                                   ProductsComponent,
                                   AboutusComponent,
                                   LatestupdatesComponent,
                                   ContactusComponent,
                                   NotfoundComponent]
