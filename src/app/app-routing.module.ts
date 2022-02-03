import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';

export function startsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
      const fullUrl = url.map(u => u.path).join('/');
      if (fullUrl.startsWith(prefix)) {
          return ({ consumed: url});
      }
      return null;
  };
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }