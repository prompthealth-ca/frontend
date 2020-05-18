import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'embededUrl',
    pure: false
})

export class EmbededURLPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(args): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(args);
    } 
}