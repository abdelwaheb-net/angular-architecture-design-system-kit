// docs.component.ts - Version complète
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule, MatIconModule, MatButtonModule],
  template: `
    <div class="docs-container">
      <div class="docs-header">
        <h1>📚 Documentation</h1>
        <p>Guide complet pour utiliser l'Angular Architecture Kit</p>
      </div>

      <mat-accordion>
        <!-- Introduction -->
        <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>info</mat-icon>
              Introduction
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h3>Bienvenue dans Angular Architecture Kit</h3>
            <p>
              Cette application vous permet de créer facilement des diagrammes d'architecture
              Angular pour vos projets.
            </p>

            <h4>Fonctionnalités :</h4>
            <ul>
              <li>✅ Génération de composants Angular</li>
              <li>✅ Prévisualisation en temps réel</li>
              <li>✅ Templates d'architecture prédéfinis</li>
              <li>✅ Export vers Excalidraw</li>
              <li>✅ Sauvegarde automatique</li>
              <li>✅ Mode sombre</li>
              <li>✅ Raccourcis clavier</li>
            </ul>
          </div>
        </mat-expansion-panel>

        <!-- Guide d'utilisation -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>build</mat-icon>
              Guide d'utilisation rapide
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h4>🚀 Démarrage rapide</h4>
            <ol>
              <li>Cliquez sur "Générer" pour créer une bibliothèque de base</li>
              <li>Parcourez les composants dans l'onglet "Composants"</li>
              <li>Ajoutez des composants avec le bouton "Ajouter"</li>
              <li>Prévisualisez dans l'onglet "Prévisualisation"</li>
              <li>Exportez votre bibliothèque</li>
            </ol>

            <h4>🎨 Personnalisation</h4>
            <ul>
              <li>Utilisez la recherche pour trouver des composants</li>
              <li>Filtrez par catégorie</li>
              <li>Ajoutez des favoris avec l'étoile ⭐</li>
              <li>Générez des templates complets</li>
            </ul>
          </div>
        </mat-expansion-panel>

        <!-- Raccourcis clavier -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>keyboard</mat-icon>
              Raccourcis clavier
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <table class="shortcuts-table">
              <tr>
                <th>Raccourci</th>
                <th>Action</th>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>G</kbd></td>
                <td>Générer la bibliothèque</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>E</kbd></td>
                <td>Ouvrir le dialogue d'export</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
                <td>Sauvegarder la bibliothèque</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>P</kbd></td>
                <td>Exporter en PDF</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td>
                <td>Exporter en SVG</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd></td>
                <td>Copier le lien de partage</td>
              </tr>
              <tr>
                <td><kbd>F1</kbd></td>
                <td>Ouvrir la documentation</td>
              </tr>
            </table>
          </div>
        </mat-expansion-panel>

        <!-- API Reference -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>code</mat-icon>
              API Reference
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h4>LibraryGeneratorService</h4>
            <p>Service principal pour la génération de bibliothèques.</p>

            <h5>Méthodes principales :</h5>
            <ul>
              <li><code>generateLibrary()</code> - Génère la bibliothèque de base</li>
              <li><code>generateFullLibrary()</code> - Génère tous les composants</li>
              <li>
                <code>generateArchitectureTemplate(name)</code> - Génère un template spécifique
              </li>
              <li><code>addComponentToLibrary(type)</code> - Ajoute un composant</li>
              <li><code>removeComponentFromLibrary(id)</code> - Supprime un composant</li>
              <li><code>exportLibrary()</code> - Exporte en JSON</li>
              <li><code>downloadLibrary(filename)</code> - Télécharge le fichier</li>
            </ul>

            <h4>CanvasRendererService</h4>
            <p>Service pour le rendu des éléments sur canvas.</p>

            <h4>FileExportService</h4>
            <p>Service pour l'export/import de fichiers.</p>
          </div>
        </mat-expansion-panel>

        <!-- Dépannage -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>warning</mat-icon>
              Dépannage
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h4>Problèmes courants</h4>

            <h5>Les composants ne s'affichent pas dans Excalidraw</h5>
            <p>Vérifiez que vous importez correctement le fichier .excalidrawlib.</p>

            <h5>La prévisualisation est vide</h5>
            <p>Cliquez sur "Générer" ou "Ajouter" pour créer des composants.</p>

            <h5>Le zoom ne fonctionne pas</h5>
            <p>Utilisez la molette de la souris ou les boutons de zoom.</p>
          </div>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `,
  styles: [
    `
      .docs-container {
        padding: 24px;
        max-width: 900px;
        margin: 0 auto;
      }

      .docs-header {
        text-align: center;
        margin-bottom: 32px;

        h1 {
          font-size: 2rem;
          color: #1976d2;
        }

        p {
          color: #666;
        }
      }

      .doc-content {
        padding: 16px;

        h3,
        h4,
        h5 {
          margin-top: 16px;
          color: #333;
        }

        ul,
        ol {
          padding-left: 24px;
        }

        li {
          margin: 8px 0;
        }

        code {
          background: #f5f5f5;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
        }

        kbd {
          background: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 0.9em;
        }
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;

        th,
        td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        th {
          background: #f5f5f5;
        }
      }
    `,
  ],
})
export class DocsComponent {}
