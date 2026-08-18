// element-editor.component.ts - Version propre
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-element-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  template: `
    <h2 mat-dialog-title>✏️ Éditer l'élément</h2>

    <mat-dialog-content>
      <div class="element-editor">
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Nom de l'élément</mat-label>
          <input matInput [(ngModel)]="elementName" placeholder="Ex: Mon Composant" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Couleur</mat-label>
          <input matInput type="color" [(ngModel)]="elementColor" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Taille du texte</mat-label>
          <input matInput type="number" [(ngModel)]="fontSize" min="8" max="72" />
        </mat-form-field>

        <div class="preview-box" [style.border-color]="elementColor">
          <div class="preview-text" [style.color]="elementColor" [style.font-size.px]="fontSize">
            {{ elementName || 'Aperçu' }}
          </div>
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()"><mat-icon>cancel</mat-icon> Annuler</button>
      <button mat-raised-button color="primary" (click)="onSave()">
        <mat-icon>save</mat-icon> Enregistrer
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .element-editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px 0;
        min-width: 400px;
      }

      .full-width {
        width: 100%;
      }

      .preview-box {
        border: 2px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        background: #fafafa;
        margin-top: 8px;
      }

      .preview-text {
        font-weight: 500;
      }
    `,
  ],
})
export class ElementEditorComponent {
  elementName = '';
  elementColor = '#DD0031';
  fontSize = 20;

  constructor(
    public dialogRef: MatDialogRef<ElementEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (data) {
      this.elementName = data.elementName || '';
      this.elementColor = data.elementColor || '#DD0031';
      this.fontSize = data.fontSize || 20;
    }
  }

  onSave(): void {
    this.dialogRef.close({
      name: this.elementName,
      color: this.elementColor,
      fontSize: this.fontSize,
    });
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
