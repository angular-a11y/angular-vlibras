import { Component, Input } from '@angular/core';
import { AvatarOption, mapPosition, WidgetPosition } from './utils';

@Component({
  selector: 'angular-vlibras',
  standalone: true,
  templateUrl: 'angular-vlibras.component.html',
})
export class AngularVlibras {
  src: string = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  urlWidget: string = 'https://vlibras.gov.br/app';

  @Input() position?: WidgetPosition;
  @Input() avatar?: AvatarOption = 'guga';
  @Input() opacity?: number = 1;

  private script: HTMLScriptElement | null = null;

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.script = document.createElement('script');
    this.script.addEventListener('load', () => this.createWidget());
    this.script.src = this.src;
    document.body.appendChild(this.script);
  }

  public createWidget(): void {
    this.script?.removeEventListener('load', () => this.createWidget());
    new (window as any).VLibras.Widget({
      position: mapPosition[this.position ?? 'right'],
      rootPath: this.urlWidget,
      avatar: this.avatar,
      opacity: this.opacity
    });
    this.observeDOMChanges();
  }

  private generateUniqueKeyframeName(baseName: string): string {
    return `${baseName}-${Math.random().toString(36).substring(2, 15)}`;
  }

  private updateKeyframeNameInStyles(oldName: string, newName: string): void {
    document.querySelectorAll('style').forEach((styleTag) => {
      const containsOldName = new RegExp(`@keyframes\\s+${oldName}|\\b${oldName}\\b`, 'g').test(styleTag.textContent || '');

      if (this.containsVpOrVw(styleTag.textContent || '') && containsOldName) {
        const updatedContent = (styleTag.textContent || '')
          .replace(new RegExp(`@keyframes\\s+${oldName}`, 'g'), `@keyframes ${newName}`)
          .replace(new RegExp('(animation:\\s*[^;}]*?)(;|})', 'g'), (match) => {
            return match.replace(new RegExp(`\\b${oldName}\\b`, 'g'), newName);
          });
        styleTag.textContent = updatedContent;
      }
    });
  }

  private containsVpOrVw(selectorText: string): boolean {
    return /\[vp\]|\[vw\]|\.vp|\.vw|\.vpw/.test(selectorText);
  }

  private validationStyleSheet(node: Node): boolean {
    if (node.nodeName === 'STYLE' || (node.nodeName === 'LINK' && (node as HTMLLinkElement).rel === 'stylesheet')) {
      const styleSheet = (node as HTMLStyleElement | HTMLLinkElement).sheet;
      return styleSheet !== null && styleSheet.cssRules !== null;
    }
    return false;
  }

  private observeDOMChanges(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (this.validationStyleSheet(node)) {
            Array.from((node as HTMLStyleElement).sheet!.cssRules).forEach((rule) => {
              if (rule.type === CSSRule.KEYFRAMES_RULE) {
                this.updateKeyframeNameInStyles((rule as CSSKeyframesRule).name, this.generateUniqueKeyframeName((rule as CSSKeyframesRule).name));
              }
            });
          }
        });
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
  }
}
