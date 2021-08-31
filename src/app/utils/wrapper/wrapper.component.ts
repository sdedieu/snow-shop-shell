import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type WebComponentWrapperOptions = LoadRemoteModuleOptions & {
  elementName: string;
};

@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {

  @ViewChild('vc', {read: ElementRef, static: true})
  vc: ElementRef;

  constructor(private route: ActivatedRoute) { }

  async ngAfterContentInit() {

    const options = this.route.snapshot.data as WebComponentWrapperOptions;
   
    try {
        await loadRemoteModule(options);
        const element = document.createElement(options.elementName);
        this.vc.nativeElement.appendChild(element);
    }
    catch(error) {
        console.error(error);
    }

  }

}