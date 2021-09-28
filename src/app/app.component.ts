import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  /*
    constructor(private injector: Injector,
      private resolver: ComponentFactoryResolver) {
  }
  
  ngAfterViewInit(): void {
  loadRemoteModule({
  remoteEntry: 'http://localhost:4205/remoteEntry.js',
  remoteName: 'snowShopCommon',
  exposedModule: './Component',
  })
  .then(m =>  m.LogoComponent)
  .then(comp => {
  const factory = this.resolver.resolveComponentFactory(comp);
  const component = this.viewContainer.createComponent(factory, undefined, this.injector);
  component.location.nativeElement.setAttribute('class', 'header-logo')
  });
  }
  */
}
