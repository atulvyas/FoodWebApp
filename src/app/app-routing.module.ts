import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [{
  path: '', component: NavbarComponent, pathMatch: 'prefix',
  children:[
   { path:'', component: ProductComponent},
   { path:'checkout', component:CheckoutComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
