// export-dialog.component.ts
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ExcalidrawLibrary } from '../../../../core/models/excalidraw-element.model';
import { FileExportService } from '../../../../core/services/file-export.service';

export type ExportFormat = 'json' | 'text' | 'csv';

@Component({
  selector: 'app-export-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  template: `
    <h2 mat-dialog-title>Exporter la bibliothèque</h2>

    <mat-dialog-content>
      <div class="export-options">
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Nom du fichier</mat-label>
          <input matInput [(ngModel)]="filename" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Format d'export</mat-label>
          <mat-select [(ngModel)]="format">
            <mat-option value="json">JSON (.excalidrawlib)</mat-option>
            <mat-option value="text">Texte lisible</mat-option>
            <mat-option value="csv">CSV (analyse)</mat-option>
          </mat-select>
        </mat-form-field>

        <div class="info">
          <p>
            <mat-icon>info</mat-icon>
            {{ library.libraryItems.length }} éléments seront exportés
          </p>
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Annuler</button>
      <button mat-raised-button color="primary" (click)="onExport()">
        <mat-icon>download</mat-icon> Exporter
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .export-options {
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 400px;
        padding: 16px 0;
      }

      .full-width {
        width: 100%;
      }

      .info {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #666;

        mat-icon {
          font-size: 20px;
        }

        p {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
    `,
  ],
})
export class ExportDialogComponent {
  filename = 'angular-architecture-kit.excalidrawlib';
  format: ExportFormat = 'json';

  constructor(
    public dialogRef: MatDialogRef<ExportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public library: ExcalidrawLibrary,
    private fileExportService: FileExportService,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onExport(): void {
    const finalFilename = this.getFinalFilename();

    switch (this.format) {
      case 'json':
        this.fileExportService.exportToJSON(this.library, finalFilename);
        break;
      case 'text':
        this.fileExportService.exportToText(this.library, finalFilename);
        break;
      case 'csv':
        this.fileExportService.exportToCSV(this.library, finalFilename);
        break;
    }

    this.dialogRef.close({
      filename: finalFilename,
      format: this.format,
    });
  }

  private getFinalFilename(): string {
    const baseName = this.filename.replace(/\.[^.]+$/, '');

    switch (this.format) {
      case 'json':
        return `${baseName}.excalidrawlib`;
      case 'text':
        return `${baseName}.txt`;
      case 'csv':
        return `${baseName}.csv`;
      default:
        return this.filename;
    }
  }
}
