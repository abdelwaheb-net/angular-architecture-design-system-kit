// docs.component.ts - Version avec traduction
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    TranslatePipe, // Ajouter le pipe
  ],
  template: `
    <div class="docs-container">
      <div class="docs-header">
        <h1>{{ 'DOCS.TITLE' | t }}</h1>
        <p>{{ 'DOCS.SUBTITLE' | t }}</p>
      </div>

      <mat-accordion>
        <!-- Introduction -->
        <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>info</mat-icon>
              {{ 'DOCS.INTRODUCTION.TITLE' | t }}
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h3>{{ 'DOCS.INTRODUCTION.WELCOME' | t }}</h3>
            <p>{{ 'DOCS.INTRODUCTION.DESCRIPTION' | t }}</p>

            <h4>{{ 'DOCS.INTRODUCTION.FEATURES_TITLE' | t }}</h4>
            <ul>
              <li>✅ {{ 'DOCS.INTRODUCTION.FEATURE_1' | t }}</li>
              <li>✅ {{ 'DOCS.INTRODUCTION.FEATURE_2' | t }}</li>
              <li>✅ {{ 'DOCS.INTRODUCTION.FEATURE_3' | t }}</li>
              <li>✅ {{ 'DOCS.INTRODUCTION.FEATURE_4' | t }}</li>
              <li>✅ {{ 'DOCS.INTRODUCTION.FEATURE_5' | t }}</li>
              <li>✅ {{ 'DOCS.INTRODUCTION.FEATURE_6' | t }}</li>
              <li>✅ {{ 'DOCS.INTRODUCTION.FEATURE_7' | t }}</li>
            </ul>
          </div>
        </mat-expansion-panel>

        <!-- Guide de démarrage -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>build</mat-icon>
              {{ 'DOCS.QUICK_START.TITLE' | t }}
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h4>🚀 {{ 'DOCS.QUICK_START.TITLE' | t }}</h4>
            <ol>
              <li>{{ 'DOCS.QUICK_START.STEP_1' | t }}</li>
              <li>{{ 'DOCS.QUICK_START.STEP_2' | t }}</li>
              <li>{{ 'DOCS.QUICK_START.STEP_3' | t }}</li>
              <li>{{ 'DOCS.QUICK_START.STEP_4' | t }}</li>
              <li>{{ 'DOCS.QUICK_START.STEP_5' | t }}</li>
            </ol>

            <h4>🎨 {{ 'DOCS.QUICK_START.CUSTOMIZATION_TITLE' | t }}</h4>
            <ul>
              <li>{{ 'DOCS.QUICK_START.CUSTOMIZATION_1' | t }}</li>
              <li>{{ 'DOCS.QUICK_START.CUSTOMIZATION_2' | t }}</li>
              <li>{{ 'DOCS.QUICK_START.CUSTOMIZATION_3' | t }}</li>
              <li>{{ 'DOCS.QUICK_START.CUSTOMIZATION_4' | t }}</li>
            </ul>
          </div>
        </mat-expansion-panel>

        <!-- Raccourcis clavier -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>keyboard</mat-icon>
              {{ 'DOCS.SHORTCUTS.TITLE' | t }}
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
                <td>{{ 'DOCS.SHORTCUTS.GENERATE' | t }}</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>E</kbd></td>
                <td>{{ 'DOCS.SHORTCUTS.EXPORT' | t }}</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
                <td>{{ 'DOCS.SHORTCUTS.SAVE' | t }}</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>P</kbd></td>
                <td>{{ 'DOCS.SHORTCUTS.EXPORT_PDF' | t }}</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td>
                <td>{{ 'DOCS.SHORTCUTS.EXPORT_SVG' | t }}</td>
              </tr>
              <tr>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd></td>
                <td>{{ 'DOCS.SHORTCUTS.COPY_LINK' | t }}</td>
              </tr>
              <tr>
                <td><kbd>F1</kbd></td>
                <td>{{ 'DOCS.SHORTCUTS.OPEN_DOCS' | t }}</td>
              </tr>
            </table>
          </div>
        </mat-expansion-panel>

        <!-- API Reference -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>code</mat-icon>
              {{ 'DOCS.API_REFERENCE.TITLE' | t }}
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h4>{{ 'DOCS.API_REFERENCE.LIBRARY_SERVICE' | t }}</h4>
            <p>{{ 'DOCS.API_REFERENCE.LIBRARY_SERVICE_DESC' | t }}</p>

            <h5>{{ 'DOCS.API_REFERENCE.METHODS_TITLE' | t }}</h5>
            <ul>
              <li>
                <code>{{ 'DOCS.API_REFERENCE.METHOD_1' | t }}</code>
              </li>
              <li>
                <code>{{ 'DOCS.API_REFERENCE.METHOD_2' | t }}</code>
              </li>
              <li>
                <code>{{ 'DOCS.API_REFERENCE.METHOD_3' | t }}</code>
              </li>
              <li>
                <code>{{ 'DOCS.API_REFERENCE.METHOD_4' | t }}</code>
              </li>
              <li>
                <code>{{ 'DOCS.API_REFERENCE.METHOD_5' | t }}</code>
              </li>
              <li>
                <code>{{ 'DOCS.API_REFERENCE.METHOD_6' | t }}</code>
              </li>
              <li>
                <code>{{ 'DOCS.API_REFERENCE.METHOD_7' | t }}</code>
              </li>
            </ul>

            <h4>{{ 'DOCS.API_REFERENCE.CANVAS_SERVICE' | t }}</h4>
            <p>{{ 'DOCS.API_REFERENCE.CANVAS_SERVICE_DESC' | t }}</p>

            <h4>{{ 'DOCS.API_REFERENCE.FILE_SERVICE' | t }}</h4>
            <p>{{ 'DOCS.API_REFERENCE.FILE_SERVICE_DESC' | t }}</p>
          </div>
        </mat-expansion-panel>

        <!-- Dépannage -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>warning</mat-icon>
              {{ 'DOCS.TROUBLESHOOTING.TITLE' | t }}
            </mat-panel-title>
          </mat-expansion-panel-header>

          <div class="doc-content">
            <h4>{{ 'DOCS.TROUBLESHOOTING.PROBLEM_1_TITLE' | t }}</h4>
            <p>{{ 'DOCS.TROUBLESHOOTING.PROBLEM_1_SOLUTION' | t }}</p>

            <h4>{{ 'DOCS.TROUBLESHOOTING.PROBLEM_2_TITLE' | t }}</h4>
            <p>{{ 'DOCS.TROUBLESHOOTING.PROBLEM_2_SOLUTION' | t }}</p>

            <h4>{{ 'DOCS.TROUBLESHOOTING.PROBLEM_3_TITLE' | t }}</h4>
            <p>{{ 'DOCS.TROUBLESHOOTING.PROBLEM_3_SOLUTION' | t }}</p>
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
