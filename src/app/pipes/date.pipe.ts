import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    const parts = value.split('.');
    const formattedDate = `${parts[0]}.${parts[1]}.${parts[2].slice(-2)}`;
    return formattedDate;
  }

}
