import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'neightborhoodCode',
})
export class NeightborhoodCodePipe implements PipeTransform {
  transform(neightborhoodName: string): string {
    const uppercaseLetters = neightborhoodName.substr(0, 2).toUpperCase();
    return `${neightborhoodName} (${uppercaseLetters})`;
  }
}
