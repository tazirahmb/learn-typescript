import {PropsWithChildren} from 'react';

export interface User {
  name: string;
  lastName?: string;
  age: number | string; // one of type
}

type WindowsWidth = number;

export type WindowState =
  WindowsWidth | 'Locked' | 'Unlocked' | 'Unknown';

export type Props = PropsWithChildren<{
  title: string;
  useLink?: boolean; // ? means optional
   // kalau misal pake default value di propsnya,
  // dia tetap akan error kalo misal default typenya ga sesuai
  // solusinya dibikin defaultnya sama jenis (entah napa not work)
  // atau propsnya dibikin opsional
  userData: User[]
}>

export type FullName = (firstName: string, lastName?: string) => string;