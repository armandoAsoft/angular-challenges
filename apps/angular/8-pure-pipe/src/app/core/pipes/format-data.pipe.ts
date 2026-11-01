import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData',
})
export class FormatDataPipe implements PipeTransform {
  transform(value: string, pos: number) {
    return `${value} - ${pos}`;
  }
}
