import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, show: boolean = false ): string {
    return ( show ) ? '*'.repeat(value.length) : value ;
  }

}
