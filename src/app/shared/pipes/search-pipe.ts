import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.slug.toLocaleLowerCase().includes(args)) || (val.slug.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}