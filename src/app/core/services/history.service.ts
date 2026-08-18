// src/app/core/services/history.service.ts
import { Injectable, signal } from '@angular/core';
import { ExcalidrawLibrary } from '../models/excalidraw-element.model';

interface HistoryEntry {
  library: ExcalidrawLibrary;
  timestamp: number;
  action: string;
}

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private readonly _history = signal<HistoryEntry[]>([]);
  private readonly _currentIndex = signal<number>(-1);

  readonly history = this._history.asReadonly();
  readonly currentIndex = this._currentIndex.asReadonly();

  constructor() {}

  addEntry(library: ExcalidrawLibrary, action: string): void {
    const entries = this._history();
    const newEntry: HistoryEntry = {
      library: JSON.parse(JSON.stringify(library)),
      timestamp: Date.now(),
      action,
    };

    // Supprimer les entrées après l'index actuel
    const currentIndex = this._currentIndex();
    const newEntries = entries.slice(0, currentIndex + 1);
    newEntries.push(newEntry);

    this._history.set(newEntries);
    this._currentIndex.set(newEntries.length - 1);
  }

  undo(): ExcalidrawLibrary | null {
    const currentIndex = this._currentIndex();
    if (currentIndex <= 0) return null;

    const newIndex = currentIndex - 1;
    this._currentIndex.set(newIndex);
    return this._history()[newIndex].library;
  }

  redo(): ExcalidrawLibrary | null {
    const currentIndex = this._currentIndex();
    const entries = this._history();

    if (currentIndex >= entries.length - 1) return null;

    const newIndex = currentIndex + 1;
    this._currentIndex.set(newIndex);
    return entries[newIndex].library;
  }

  canUndo(): boolean {
    return this._currentIndex() > 0;
  }

  canRedo(): boolean {
    return this._currentIndex() < this._history().length - 1;
  }

  clear(): void {
    this._history.set([]);
    this._currentIndex.set(-1);
  }
}
