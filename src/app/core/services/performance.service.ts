// src/app/core/services/performance.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  private metrics: Map<string, number> = new Map();

  startMeasure(name: string): void {
    this.metrics.set(name, performance.now());
  }

  endMeasure(name: string): void {
    const start = this.metrics.get(name);
    if (start) {
      const duration = performance.now() - start;
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
      this.metrics.delete(name);
    }
  }
}
