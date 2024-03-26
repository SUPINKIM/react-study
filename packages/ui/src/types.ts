import {
    FC,
    ForwardRefExoticComponent,
    PropsWithChildren,
    ReactNode
} from 'react';

export type TPropsWithChildren<T = unknown> = FC<T & { children: ReactNode }>;

export type TReactElementsWithChildren<T extends string, U> = Record<
    T,
    TPropsWithChildren<U>
>;

export interface ForwardRefExoticComponentWithId<T = PropsWithChildren>
    extends ForwardRefExoticComponent<T> {
    id?: string;
}
