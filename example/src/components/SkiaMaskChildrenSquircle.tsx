import {
  Image,
  LinearGradient,
  Rect,
  SweepGradient,
  useImage,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Squircle from 'react-native-squircle';

const styleSheetSize = (width: number, height: number) => {
  return {
    marginHorizontal: 12,
    width,
    height,
  };
};

const TextChild = () => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
    </View>
  );
};

const TextChildLeft = () => {
  return (
    <View style={styles.containerTextLeft}>
      <Text style={styles.textLeft}>Lorem ipsum dolor sit amet</Text>
    </View>
  );
};

const SkiaMaskChildrenSquircle = () => {
  const image1 = useImage(require('../../assets/image1.png'));
  const image2 = useImage(require('../../assets/image2.jpg'));
  const image3 = useImage(require('../../assets/image3.jpg'));

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {image1 && (
        <Squircle
          style={styleSheetSize(230, 190)}
          borderRadius={20}
          maskChildren={
            <Image width={230} height={190} image={image1!} fit="cover" />
          }
        />
      )}
      {image2 && (
        <Squircle
          style={styleSheetSize(290, 190)}
          borderRadius={49}
          maskChildren={
            <>
              <Image width={290} height={190} image={image2!} fit="cover" />
              <Rect x={0} y={0} width={100} height={190} color="#AFD3E2" />
            </>
          }
        >
          <TextChildLeft />
        </Squircle>
      )}
      {image3 && (
        <Squircle
          style={styleSheetSize(190, 140)}
          borderRadius={20}
          maskChildren={
            <Image width={190} height={140} image={image3!} fit="cover" />
          }
        >
          <TextChild />
        </Squircle>
      )}
      <Squircle
        style={styleSheetSize(200, 180)}
        borderRadius={38}
        maskChildren={
          <Rect x={0} y={0} width={200} height={180}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(200, 180)}
              colors={['#FF6969', '#A6D0DD']}
            />
          </Rect>
        }
      >
        <TextChild />
      </Squircle>
      <Squircle
        style={styleSheetSize(200, 200)}
        borderRadius={20}
        maskChildren={
          <Rect x={0} y={0} width={200} height={200}>
            <SweepGradient
              c={vec(100, 100)}
              colors={['#7149C6', '#FC2947', '#FFED00', '#7149C6']}
            />
          </Rect>
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerText: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginHorizontal: 12,
  },
  containerTextLeft: {
    justifyContent: 'center',
    width: 100,
    height: '100%',
  },
  textLeft: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});

export default SkiaMaskChildrenSquircle;
