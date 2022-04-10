import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmbedCodePenService {

  private CODEPEN_REGEX: RegExp = new RegExp(`https://codepen.io/jashuawhite/pen/([a-zA-Z0-9]+)`)
  private CODEPEN_SCRIPT_ID: string = 'codepen-script';
  private CODEPEN_SCRIPT_SRC: string = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

  constructor() { }

  public init() {
      this.loadCodePens()
  }

  private loadCodePens() {
      const script = document.createElement('script')
      script.id = this.CODEPEN_SCRIPT_ID
      script.src = this.CODEPEN_SCRIPT_SRC
      script.type = 'text/javascript'
      script.defer = true
      document.querySelector('head')?.appendChild(script)
    
  }
}
