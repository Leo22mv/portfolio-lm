import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ngAfterViewInit(): void {
    const queryParams = new URLSearchParams(window.location.search);
    const param = queryParams.get('successMsg');
    if (param) {
      // const section = document.getElementById('contact-section');
      // section?.scrollIntoView();

      // const toastLiveExample = document.getElementById('liveToast')
      // const toastBootstrap = (window as any).bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      // toastBootstrap.show()

      const modalElement = document.getElementById('successMsgModal');
      if (modalElement) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      }

      // const url = new URL(window.location.href);
      // if (url.searchParams.has(param)) {
      //   url.searchParams.delete(param);
      //   window.history.replaceState({}, '', url.toString());
      //   console.log(`Query param "${param}" eliminado de la URL.`);
      // } else {
      //   console.warn(`Query param "${param}" no encontrado en la URL.`);
      // }
    }
  }
}
