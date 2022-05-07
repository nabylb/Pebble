import {Control} from 'react-hook-form';

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export type FontStyle = 'normal' | 'italic' | undefined;

type Font = {
  fontFamily: string;
  fontSize: number;
  fontWeight: FontWeight;
  fontStyle: FontStyle;
  letterSpacing: number;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
  color: string;
};

export type FontType = {
  [key: string]: Font;
};

export type User = {
  token: string;
} | null;

export type Form = {
  [key: string]: string | number | null;
};

export enum ComponentLibrary {
  ffField = 'ffField',
  slField = 'slField',
  nestedSlField = 'nestedSlField',
  signField = 'signField',
}

export type FFFieldElement = {
  spec: {
    page: number;
    text: string;
  };
  type: ComponentLibrary;
};

export type SLFieldOptionsElement = {
  text: string;
  needsExplanation?: boolean;
};

export type SLFieldElement = {
  spec: {
    page: number;
    text: string;
    options: SLFieldOptionsElement[];
  };
  type: ComponentLibrary;
};

export type NestedSlField = {
  spec: {
    page: number;
    text: string;
    subFieldSpecs: SLFieldOptionsElement[];
  };
  type: ComponentLibrary;
};

export type SignSlField = {
  spec: {
    page: number;
    text: string;
  };
  type: ComponentLibrary;
};

export type FieldElement =
  | FFFieldElement
  | SLFieldElement
  | NestedSlField
  | SignSlField;

export type FormControl = Control<{[key: string]: string | null | undefined}>;
