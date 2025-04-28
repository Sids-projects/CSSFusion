import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from './services/shared.service';
import { ComponentData } from './interface/component-data';
import { TemplateData } from './interface/template-data';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CSSFusion';

  templateData: TemplateData[] = this.shared.templateData;
  componentsData: ComponentData[] = this.shared.componentsData;
  storeDesc!: TemplateData;
  @ViewChild('myDialog') dialog!: ElementRef<HTMLDialogElement>;
  showMain: string = '/';
  showLoadEffect: boolean = false;
  @ViewChild('popupDialog') popupDialogRef!: ElementRef<HTMLDialogElement>;

  constructor(
    private sanitizer: DomSanitizer,
    private shared: SharedService,
    private router: Router
  ) {
    this.templateData[0] = this.shared.templateData[0];
    this.showDesc(this.templateData[0]);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMain = event.urlAfterRedirects.toLowerCase();
        console.log('event', this.showMain);
      }
    });
  }

  ngOnInit() {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  showDesc(param: any) {
    this.storeDesc = param;
  }

  openDialog() {
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }

  showLoadEffectFn(param: string) {
    // this.showLoadEffect = true;
    this.router.navigate([param]);

    // setTimeout(() => {
    //   this.router.navigate([param]);
    // }, 1000);

    // setTimeout(() => {
    //   this.showLoadEffect = false;
    // }, 2000);
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.showDesc(this.templateData[0]);
    }

    if (event.index === 1) {
      this.showDesc(this.componentsData[0]);
    }
  }

  openPopup(param: any) {
    this.router.navigate([param]);
    const dialog = this.popupDialogRef.nativeElement;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      console.error('The <dialog> API is not supported by this browser.');
    }

    // this.popupDialogRef.nativeElement.addEventListener('click', (event) => {
    //   const rect = this.popupDialogRef.nativeElement.getBoundingClientRect();
    //   if (
    //     event.clientX < rect.left || event.clientX > rect.right ||
    //     event.clientY < rect.top || event.clientY > rect.bottom
    //   ) {
    //     this.closePopup();
    //   }
    // });
  }

  closePopup() {
    this.popupDialogRef.nativeElement.close();
  }
}
