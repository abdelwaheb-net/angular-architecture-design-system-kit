// share-dialog.component.ts - Version corrigée
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExcalidrawLibrary } from '../../../../core/models/excalidraw-element.model';
import { ShareService } from '../../../../core/services/share.service';

@Component({
  selector: 'app-share-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <h2 mat-dialog-title>🔗 Partager la bibliothèque</h2>

    <mat-dialog-content>
      <div class="share-container">
        <p class="share-description">
          Partagez votre bibliothèque de composants Angular avec votre équipe.
        </p>

        <!-- Lien de partage -->
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Lien de partage</mat-label>
          <input matInput [value]="shareLink" readonly />
          <button mat-icon-button matSuffix matTooltip="Copier le lien" (click)="copyLink()">
            <mat-icon>content_copy</mat-icon>
          </button>
        </mat-form-field>

        <!-- Options de partage -->
        <div class="share-options">
          <h3>Partager via :</h3>

          <div class="share-buttons">
            <button mat-raised-button color="primary" (click)="copyLink()">
              <mat-icon>content_copy</mat-icon>
              Copier le lien
            </button>

            <button mat-raised-button color="accent" (click)="shareByEmail()">
              <mat-icon>email</mat-icon>
              Email
            </button>

            <button mat-raised-button (click)="shareOnTwitter()">
              <mat-icon>share</mat-icon>
              Twitter
            </button>

            <button mat-raised-button (click)="shareOnLinkedIn()">
              <mat-icon>business</mat-icon>
              LinkedIn
            </button>

            @if (supportsWebShare) {
              <button mat-raised-button (click)="shareViaWebShare()">
                <mat-icon>share</mat-icon>
                Partage système
              </button>
            }
          </div>
        </div>

        <!-- Sauvegarde cloud -->
        <div class="cloud-save">
          <h3>Sauvegarde cloud</h3>

          <!-- Utiliser ng-container pour éviter l'avertissement -->
          @if (isSaving) {
            <ng-container>
              <button mat-raised-button color="primary" disabled>
                <mat-icon>hourglass_empty</mat-icon>
                Sauvegarde...
              </button>
            </ng-container>
          } @else {
            <ng-container>
              <button mat-raised-button color="primary" (click)="saveToCloud()">
                <mat-icon>cloud_upload</mat-icon>
                Sauvegarder dans le cloud
              </button>
            </ng-container>
          }

          @if (cloudUrl) {
            <p class="cloud-url">
              <mat-icon>check_circle</mat-icon>
              Sauvegardé : {{ cloudUrl }}
            </p>
          }
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="close()">Fermer</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .share-container {
        min-width: 400px;
        max-width: 500px;
        padding: 16px 0;
      }

      .share-description {
        color: #666;
        margin-bottom: 16px;
      }

      .full-width {
        width: 100%;
      }

      .share-options,
      .cloud-save {
        margin-top: 24px;

        h3 {
          color: #555;
          margin-bottom: 12px;
        }
      }

      .share-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        button {
          display: flex;
          align-items: center;
          gap: 8px;

          mat-icon {
            margin-right: 4px;
          }
        }
      }

      .cloud-url {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #4caf50;
        margin-top: 8px;

        mat-icon {
          font-size: 20px;
        }
      }
    `,
  ],
})
export class ShareDialogComponent {
  shareLink = '';
  supportsWebShare = false;
  isSaving = false;
  cloudUrl = '';

  constructor(
    public dialogRef: MatDialogRef<ShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public library: ExcalidrawLibrary,
    private shareService: ShareService,
    private snackBar: MatSnackBar,
  ) {
    this.shareLink = this.shareService.generateShareLink(library);
    this.supportsWebShare = !!navigator.share;
  }

  close(): void {
    this.dialogRef.close();
  }

  copyLink(): void {
    this.shareService.copyShareLink(this.library).then(() => {
      this.snackBar.open('✅ Lien copié dans le presse-papier', 'Fermer', {
        duration: 3000,
      });
    });
  }

  shareByEmail(): void {
    this.shareService.shareByEmail(this.library);
  }

  shareOnTwitter(): void {
    this.shareService.shareOnTwitter(this.library);
  }

  shareOnLinkedIn(): void {
    this.shareService.shareOnLinkedIn(this.library);
  }

  async shareViaWebShare(): Promise<void> {
    const shared = await this.shareService.shareViaWebShare(this.library);

    if (shared) {
      this.snackBar.open('✅ Partage réussi', 'Fermer', {
        duration: 3000,
      });
    }
  }

  async saveToCloud(): Promise<void> {
    this.isSaving = true;

    try {
      this.cloudUrl = await this.shareService.saveToCloud(this.library);
      this.snackBar.open('✅ Sauvegardé dans le cloud', 'Fermer', {
        duration: 3000,
      });
    } catch (error) {
      console.error('Erreur sauvegarde cloud:', error);
      this.snackBar.open('❌ Erreur lors de la sauvegarde', 'Fermer', {
        duration: 3000,
      });
    } finally {
      this.isSaving = false;
    }
  }
}
