import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private activeRequest = signal(false);
  public isLoading = computed(() => this.activeRequest() === true);

  show() {
    this.activeRequest.set(true);
  }

  hide() {
    this.activeRequest.set(false);
  }
}
