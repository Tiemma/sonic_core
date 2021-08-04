import { RequestObject } from './swagger-utils';

export type Node = string;

export interface Dependency {
    dependencies: Node[],
    requestData?: RequestObject
}

export type DependencyGraph = Record<Node, Dependency>

export function satisfyDependencyConstraints(dependencyGraph: DependencyGraph): void;
export function dependencyCycleDetection(dependencyGraph: DependencyGraph): void;
export function topologicalDependencySort(dependencyGraph: DependencyGraph): import('./structures');
// # sourceMappingURL=graph-utils.d.ts.map
