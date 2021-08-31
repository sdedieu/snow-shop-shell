import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './utils/wrapper/wrapper.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'snowboard', 
  component: WrapperComponent,
  data: {
    remoteName: 'snowboard',
    remoteEntry: 'http://localhost:4204/remoteEntry.js',
    exposedModule: './SnowBoardModule',
    elementName: 'snowboard-page-element'
  }},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
