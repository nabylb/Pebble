import React, {useEffect} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useAuth, usePage, useUser} from '../../hooks';
import {useForm, Controller} from 'react-hook-form';
import {Colors, Metrics, Typography} from '../../resources';
import {TextEntry} from '../../components/atoms';
import {renderField} from '../../components/template/Factory';
import {FieldElement} from '../../types';
import Modal from 'react-native-modal';

const MainScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);
  const {addUser} = useUser();
  const {logout} = useAuth();
  const {pages} = usePage();

  const previewCount = 1;
  const startScroll = Metrics.screenWidth;

  const _logout = () => {
    logout()
      .then(() => {
        Alert.alert('Logged out!');
        addUser(null);
      })
      .catch((error: any) => {
        console.log('Log out cancelled: ', error);
      });
  };

  const renderPages = ({item}: {item: FieldElement[]}) => {
    return (
      <View style={{flex: 1}}>
        {item.map(page => {
          return renderField(page, control, errors);
        })}
      </View>
    );
  };

  const snapToOffsets = pages.map((x, i) => {
    return i * Metrics.screenWidth * previewCount + startScroll;
  });

  const totalItemWidth = Metrics.screenWidth + 50;
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: Colors.white}} />
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'slide'}
          hidden={false}
        />
        <Modal style={styles.modal} visible={true}>
          <FlatList
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={totalItemWidth}
            decelerationRate="fast"
            getItemLayout={(data, index) => ({
              length: totalItemWidth,
              offset: totalItemWidth * index,
              index,
            })}
            data={pages}
            keyExtractor={item => {
              return item[0].spec.text;
            }}
            renderItem={renderPages}
          />
        </Modal>
        <Button title="Logout" onPress={_logout} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});

export default MainScreen;
