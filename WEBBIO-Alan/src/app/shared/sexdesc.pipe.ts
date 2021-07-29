import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexdesc'
})
export class SexdescPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
