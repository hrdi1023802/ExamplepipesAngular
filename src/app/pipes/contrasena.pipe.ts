import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena',
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: any, activar: boolean = true): string {
    if (activar){ value = '*'.repeat(value.length);}
    return value;
  }
}
