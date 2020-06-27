import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any, key?:any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val[key].toLowerCase().includes(args.toLowerCase())) || (val[key].toLowerCase().includes(args.toLowerCase()));
      return rVal;
    })

  }

}