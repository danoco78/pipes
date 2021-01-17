import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    return ( activar ) ? '*'.repeat(value.length) : value;


    // let i: number = 0;
    // let password: string = '';
       
    // if ( activar ) {
    //   for (i = 0; i <= value.length; i++) {
    //      password = password + '*';
    //    } 
    //    return password;
    //  }else {
    //    return value;
    //  }

  }

}
