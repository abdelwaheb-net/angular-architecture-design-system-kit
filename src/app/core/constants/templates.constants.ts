// templates.constants.ts
import { ComponentType } from '../models/component-types.enum';

export interface ArchitectureTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  components: ComponentType[];
  category: string;
}

export const ARCHITECTURE_TEMPLATES: ArchitectureTemplate[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce Architecture',
    description:
      'Architecture complète pour application e-commerce avec panier, catalogue et paiement',
    icon: '🛒',
    category: 'Business',
    components: [
      ComponentType.STANDALONE_COMPONENT,
      ComponentType.SMART_COMPONENT,
      ComponentType.INJECTABLE_SERVICE,
      ComponentType.NGRX_STORE,
      ComponentType.ROUTE_NODE,
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard Analytics',
    description: 'Architecture pour tableau de bord avec visualisation de données en temps réel',
    icon: '📊',
    category: 'Analytics',
    components: [
      ComponentType.STANDALONE_COMPONENT,
      ComponentType.SIGNAL_COMPONENT,
      ComponentType.ROUTE_NODE,
      ComponentType.INJECTABLE_SERVICE,
      ComponentType.SIGNAL,
    ],
  },
  {
    id: 'micro-frontend',
    name: 'Micro-Frontend',
    description: 'Architecture micro-frontend avec Module Federation',
    icon: '🧩',
    category: 'Enterprise',
    components: [
      ComponentType.STANDALONE_COMPONENT,
      ComponentType.INJECTABLE_SERVICE,
      ComponentType.ROUTE_NODE,
      ComponentType.MICRO_FRONTEND,
    ],
  },
  {
    id: 'reactive-forms',
    name: 'Reactive Forms',
    description: 'Architecture pour formulaires réactifs complexes',
    icon: '📝',
    category: 'Forms',
    components: [
      ComponentType.STANDALONE_COMPONENT,
      ComponentType.INJECTABLE_SERVICE,
      ComponentType.SUBJECT,
    ],
  },
  {
    id: 'real-time',
    name: 'Real-Time Application',
    description: 'Architecture temps réel avec WebSocket et RxJS',
    icon: '⚡',
    category: 'Real-Time',
    components: [
      ComponentType.SIGNAL_COMPONENT,
      ComponentType.SUBJECT,
      ComponentType.INJECTABLE_SERVICE,
      ComponentType.SIGNAL,
    ],
  },
];
