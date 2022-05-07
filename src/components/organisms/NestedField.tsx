import React from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {NestedSlField} from '../../types';
import TextEntry from '../atoms/TextEntry';
import SLField from './SLField';

interface Element<T> {
  payload: T;
  control: Control<{[key: string]: string | null | undefined}>;
  errors: {[key: string]: FieldError | undefined};
}

const NestedField = ({payload, control, errors}: Element<NestedSlField>) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.container} key={payload.spec.text}>
            <TextEntry
              title={payload.spec.text}
              placeholder="Enter First Name"
              value={value}
              accessoryIcon
              returnKeyType="done"
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {payload.spec.subFieldSpecs
              ? payload.spec.subFieldSpecs.map(subview => {
                  return (
                    <SLField
                      payload={subview}
                      control={control}
                      errors={errors}
                    />
                  );
                })
              : null}
          </View>
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
export default NestedField;
