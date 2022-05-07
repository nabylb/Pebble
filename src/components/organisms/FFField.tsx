import React from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {Metrics} from '../../resources';
import {FFFieldElement} from '../../types';
import TextEntry from '../atoms/TextEntry';

interface Element<T> {
  payload: T;
  control: Control<{[key: string]: string | null | undefined}>;
  errors: {[key: string]: FieldError | undefined};
}

const FFField = ({payload, control, errors}: Element<FFFieldElement>) => {
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
export default FFField;
