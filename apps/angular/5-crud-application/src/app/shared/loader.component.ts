import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from '../core/services/loader.service';

@Component({
  selector: 'app-custom-loader',
  imports: [MatProgressSpinnerModule],
  template: `
    @if (loaderService.isLoading()) {
      <div class="loader-overlay">
        <mat-spinner></mat-spinner>
      </div>
    }
  `,
  styles: [
    `
      .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.32);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px); /* Compatibilidad con Safari */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
      }
    `,
  ],
})
export class LoaderComponent {
  loaderService = inject(LoaderService);
}
