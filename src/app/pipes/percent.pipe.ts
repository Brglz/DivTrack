import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: number): string {
    const roundedPercentage = (Math.ceil(value * 10000) / 100).toFixed(2);
    return roundedPercentage + '%';
  }

}
