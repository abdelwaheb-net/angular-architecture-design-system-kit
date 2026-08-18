// src/app/shared/pipes/format-item-name.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatItemName',
  standalone: true,
  pure: true, // Déjà par défaut
})
export class FormatItemNamePipe implements PipeTransform {
  transform(id: string): string {
    return id
      .split('-')
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
