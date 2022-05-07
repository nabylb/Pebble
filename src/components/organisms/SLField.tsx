import React from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {SLFieldElement} from '../../types';
import RadioButtonRN from 'radio-buttons-react-native';
import {Colors, Typography} from '../../resources';

interface Element<T> {
  payload: T;
  control: Control<{[key: string]: string | null | undefined}>;
  errors: {[key: string]: FieldError | undefined};
}

const SLField = ({payload, control, errors}: Element<SLFieldElement>) => {
  const data = payload.spec.options.map((item: {text: any}) => {
    return {
      label: item.text,
    };
  });
  console.log('SL', payload);
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.container} key={payload.spec.text}>
            <Text
              style={styles.title}
              numberOfLines={2}
              adjustsFontSizeToFit={true}
            >
              {payload.spec.text}
            </Text>
            <RadioButtonRN
              data={data}
              activeColor={Colors.ternary}
              boxActiveBgColor={Colors.secondary}
              selectedBtn={e => console.log(e)}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 4,
    textAlign: 'left',
    ...Typography.titleBold,
    color: Colors.white,
  },
});
export default SLField;
