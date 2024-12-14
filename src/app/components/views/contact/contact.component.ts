import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  fieldsError: boolean = false;
  loading: boolean = false;

  constructor (private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    document.getElementById('contactForm')?.addEventListener('submit', (event) => {
      this.fieldsError = false;
      this.loading = false;

      const email = (document.getElementById('floatingEmail') as any).value.trim();
      const tel = (document.getElementById('floatingTel') as any).value.trim();

      if (!email && !tel) {
        event.preventDefault();
        this.fieldsError = true;
      } else {
        this.loading = true;
        (document.getElementById('submitBtn') as HTMLButtonElement).disabled = true;
      }
    });
  }

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
      // console.log(url);
      // console.log(url.searchParams.has(param))
      // // if (url.searchParams) {
      // //   url.searchParams.forEach(parameter => url.searchParams.delete(parameter));
      //   window.history.replaceState({}, '', url.toString());
      // //   // console.log(`Query param "${param}" eliminado de la URL.`);
      // // }
      // url.search = '';

      const queryParams = new URLSearchParams(window.location.search);
      const param = queryParams.get('successMsg');
      if (param) {
        const queryParams = { ...this.route.snapshot.queryParams };
        delete queryParams[param];
        this.router.navigate([], {
          queryParams: queryParams,
          queryParamsHandling: 'merge',
          replaceUrl: true,
        });
      }
    }
  }  
}
