import React from 'react';
import {ComponentLibrary, FieldElement, FormControl} from '../../types';
import {FFField, SignField, SLField, NestedField} from '../organisms';

export const renderField = (
  payload: FieldElement,
  control: FormControl,
  errors: any,
) => {
  console.log('renderField', payload);
  switch (payload.type) {
    case ComponentLibrary.ffField:
      return <FFField payload={payload} control={control} errors={errors} />;
    case ComponentLibrary.slField:
      return <SLField payload={payload} control={control} errors={errors} />;
    case ComponentLibrary.nestedSlField:
      return (
        <NestedField payload={payload} control={control} errors={errors} />
      );
    case ComponentLibrary.signField:
      return <SignField payload={payload} control={control} errors={errors} />;
    default:
      return null;
  }
};
