import { FC, ReactNode } from 'react';
export type TPropsWithChildren<T = unknown> = FC<T & {
    children: ReactNode;
}>;
