import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private elementRef: ElementRef) { }

  //directive

  // @Input('appClass') set backgroundColor(color: string) {
  //   this.elementRef.nativeElement.style.backgroundColor = color;
  // }


  // replcing NgClass
  @Input('appClass') set className(classObj: any) {
    for(let key in classObj) {
      if(classObj[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }
}

