import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './utils/wrapper/wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sales', loadChildren: () => import('sales/module').then(m => m.SalesModule) },
  {
    path: 'cross-country',
    component: WrapperComponent,
    data: {
      loadChildren: () => import('crosscountry/module'),
      elementName: 'cross-country-web-component'
    }
  },{
    path: 'downhill',
    component: WrapperComponent,
    data: {
      loadChildren: () => import('downhill/module'),
      elementName: 'downhill-web-component'
    }
  },{
    path: 'snowboard',
    component: WrapperComponent,
    data: {
      loadChildren: () => import('snowboard/module'),
      elementName: 'snowboard-web-component'
    }
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }