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
      this.initCodePens()
      this.loadCodePens()
  }

  private initCodePens() {
    const embeds = Array.from(document.querySelectorAll('.embedly-card'))
    embeds.forEach(embed => {
      const codePenUrl = embed.getAttribute('href');
      const match = codePenUrl?.match(this.CODEPEN_REGEX);
      const codePenId = match ? match[1] : null
      if (codePenId) {
        const embedParent = embed.parentElement
        if (embedParent) {
          embedParent.classList.add('codepen')
          embedParent.setAttribute('data-height', '700')
          embedParent.setAttribute('data-theme-id', 'dark')
          embedParent.setAttribute('data-default-tab', 'result')
          embedParent.setAttribute('data-user', 'jashuawhite')
          embedParent.setAttribute('data-slug-hash', codePenId)
          embedParent.setAttribute('data-preview', 'true')
        }
      }
    })
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
