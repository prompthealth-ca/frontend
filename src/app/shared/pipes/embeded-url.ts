import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'embededUrl',
    pure: false
})

export class EmbededURLPipe implements PipeTransform {
    safeSrc:SafeResourceUrl;
    constructor(private sanitizer: DomSanitizer) {}
    transform(args): any {
        // console.log(args);
        return this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(args);
    } 
}