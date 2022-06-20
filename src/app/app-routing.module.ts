import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './utils/wrapper/wrapper.component';

export function startsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map(u => u.path).join('/');
    if (fullUrl.startsWith(prefix)) {
      return ({ consumed: url });
    }
    return null;
  };
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sales', loadChildren: () => import('sales/module').then(m => m.SalesModule) },
  {
    matcher: startsWith('cross-country'), component: WrapperComponent, data: {
      elementName: 'cross-country-web-component', 
      loadChildren: () => import('crosscountry/module')
    }
  },
  {
    matcher: startsWith('downhill'), component: WrapperComponent, data: {
      elementName: 'downhill-web-component', 
      loadChildren: () => import('downhill/module')
    }
  },
  {
    matcher: startsWith('snowboard'), component: WrapperComponent, data: {
      elementName: 'snowboard-web-component', 
      loadChildren: () => import('snowboard/module')
    }
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }