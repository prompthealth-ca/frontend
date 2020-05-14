import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'embededUrl',
    pure: false
})

export class EmbededURLPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(args): any {

    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = args.match(regExp);
    var url = 'https//www.youtube.com/embed/'+match[2];
    console.log('URLŁ', this.sanitizer.bypassSecurityTrustResourceUrl(url))
    if (match && match[2].length == 11) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
        return 'error';
    }
    }
}