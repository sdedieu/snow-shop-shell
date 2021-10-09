import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './utils/wrapper/wrapper.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
loadChildren: () =>
            loadRemoteModule({
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                remoteName: 'sales',
                exposedModule: './Module'
            })
            .then(m => m.SalesModule)

{path: 'snowboard', 
  component: WrapperComponent,
  data: {
    remoteName: 'snowboard',
    remoteEntry: 'http://localhost:4204/remoteEntry.js',
    exposedModule: './Module',
    elementName: 'snowboard-page-element'
  }},
*/