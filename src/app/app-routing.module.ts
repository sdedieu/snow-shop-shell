import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './utils/wrapper/wrapper.component';
import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
  
  /*{ path: 'sales', loadChildren: () => import('mfe/module').then(m => m.SalesModule) },
  {
    path: 'cross-country',
    component: WrapperComponent,
    data: {
      loadChildren: () => loadRemoteModule({
        remoteName: 'mfe',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './module'
    }),
      elementName: 'cross-country-page-element'
    }
  },
  {
    path: 'downhill',
    component: WrapperComponent,
    data: {
      loadChildren: () => loadRemoteModule({
        remoteName: 'mfe',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './module'
    }),
      elementName: 'downhill-page-element'
    }
  },
  {
    path: 'snowboard',
    component: WrapperComponent,
    data: {
      loadChildren: () => loadRemoteModule({
        remoteName: 'mfe',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        exposedModule: './module'
    }),
      elementName: 'snowboard-page-element'
    }
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }