import type { SkPath } from '@shopify/react-native-skia';

export interface SquircleParams {
  borderSmoothing: number;
  borderRadius: number;
  width: number;
  height: number;
}

export interface SquirclePathParams extends SquircleParams {
  a: number;
  b: number;
  c: number;
  d: number;
  p: number;
  circularSectionLength: number;
}

export interface DrawSquirclePathParams extends SquirclePathParams {
  path: SkPath;
  borderRadius: number;
}
