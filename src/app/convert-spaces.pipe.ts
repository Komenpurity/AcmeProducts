import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSpaces'
})
export class ConvertSpacesPipe implements PipeTransform {

  transform(value: string,character: string): string {
    return value.replace(character,'');
  }

}
