import { Directive, Input, OnInit, OnDestroy, ViewContainerRef, TemplateRef, ElementRef } from '@angular/core';
import { ResponsiveService } from '../services/ResponsiveService';

@Directive({
  selector: '[showOn]'
})
export class ShowOnDirective implements OnInit, OnDestroy {

  constructor(private responsiveService: ResponsiveService,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef<any>) {
  }

  @Input('showOn') shownOn: string;

  ngOnInit(): void {
    this.responsiveService.getScreenSize().subscribe(screenSize => {
      if (this.shownOn && this.shownOn.includes(screenSize)) {
        this.elementRef.nativeElement.style.display = '';
      } else {
        this.elementRef.nativeElement.style.display = 'none';
      }
    });
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

}
