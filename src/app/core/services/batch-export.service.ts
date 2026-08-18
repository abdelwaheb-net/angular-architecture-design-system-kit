// src/app/core/services/batch-export.service.ts
import { Injectable } from '@angular/core';
import { ExcalidrawLibrary } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class BatchExportService {
  /**
   * Exporte tous les composants individuellement
   */
  exportAllComponents(library: ExcalidrawLibrary): void {
    library.libraryItems.forEach((item) => {
      const singleLibrary: ExcalidrawLibrary = {
        ...library,
        libraryItems: [item],
      };

      // Exporter chaque composant
      const json = JSON.stringify(singleLibrary, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${item.id}.excalidrawlib`;
      link.click();
      URL.revokeObjectURL(url);
    });
  }
}
