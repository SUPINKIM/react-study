import { FC, ReactNode } from 'react';
export type TPropsWithChildren<T = unknown> = FC<T & {
    children: ReactNode;
}>;
export type TReactElementsWithChildren<T extends string, U> = Record<T, TPropsWithChildren<U>>;
