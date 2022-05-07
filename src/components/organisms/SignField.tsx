import SignatureScreen from 'react-native-signature-canvas';
import React, {useRef} from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {FFFieldElement} from '../../types';

interface Element<T> {
  payload: T;
  control: Control<{[key: string]: string | null | undefined}>;
  errors: {[key: string]: FieldError | undefined};
}

const SignField = ({payload, control, errors}: Element<FFFieldElement>) => {
  const ref = useRef();

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature: any) => {
    console.log(signature);
    onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log('Empty');
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log('clear success!');
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <View style={styles.container} key={payload.spec.text}>
        <SignatureScreen
          ref={ref}
          onEnd={handleEnd}
          onOK={handleOK}
          onEmpty={handleEmpty}
          onClear={handleClear}
          onGetData={handleData}
          autoClear={true}
          descriptionText={payload.spec.text}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
export default SignField;
