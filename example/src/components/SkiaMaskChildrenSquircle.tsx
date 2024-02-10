import {
  Fill,
  Group,
  Image,
  LinearGradient,
  Mask,
  Offset,
  Path,
  Rect,
  SweepGradient,
  useImage,
  vec,
} from '@shopify/react-native-skia';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Squircle, { drawSquirclePath } from 'react-native-squircle';

const EXAMPLE_1_WIDTH = 200;
const EXAMPLE_1_HEIGHT = 180;
const EXAMPLE_1_BORDER = 3;
const EXAMPLE_1_BORDER_RADIUS = 30;
const EXAMPLE_1_BORDER_SMOOTHING = 1;

const EXAMPLE_2_WIDTH = 200;
const EXAMPLE_2_HEIGHT = 180;
const EXAMPLE_2_BORDER = 10;
const EXAMPLE_2_BORDER_RADIUS = 28;
const EXAMPLE_2_BORDER_SMOOTHING = 1;
const EXAMPLE_2_INNER_BORDER = 10;

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

  const insidePath1 = useMemo(() => {
    return drawSquirclePath({
      borderSmoothing: EXAMPLE_1_BORDER_SMOOTHING,
      borderRadius: EXAMPLE_1_BORDER_RADIUS - EXAMPLE_1_BORDER,
      width: EXAMPLE_1_WIDTH - EXAMPLE_1_BORDER * 2,
      height: EXAMPLE_1_HEIGHT - EXAMPLE_1_BORDER * 2,
    });
  }, []);

  const insidePath2 = useMemo(() => {
    return drawSquirclePath({
      borderSmoothing: EXAMPLE_2_BORDER_SMOOTHING,
      borderRadius: EXAMPLE_2_BORDER_RADIUS - EXAMPLE_2_BORDER,
      width: EXAMPLE_2_WIDTH - EXAMPLE_2_BORDER * 2,
      height: EXAMPLE_2_HEIGHT - EXAMPLE_2_BORDER * 2,
    });
  }, []);

  const insidePath2Inner = useMemo(() => {
    return drawSquirclePath({
      borderSmoothing: EXAMPLE_2_BORDER_SMOOTHING,
      borderRadius:
        EXAMPLE_2_BORDER_RADIUS - EXAMPLE_2_BORDER - EXAMPLE_2_INNER_BORDER,
      width:
        EXAMPLE_2_WIDTH - EXAMPLE_2_BORDER * 2 - EXAMPLE_2_INNER_BORDER * 2,
      height:
        EXAMPLE_2_HEIGHT - EXAMPLE_2_BORDER * 2 - EXAMPLE_2_INNER_BORDER * 2,
    });
  }, []);

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <Squircle
        style={styleSheetSize(EXAMPLE_1_WIDTH, EXAMPLE_1_HEIGHT)}
        borderRadius={EXAMPLE_1_BORDER_RADIUS}
        maskChildren={<Fill color="#FF6969" />}
        skiaChildren={
          <Group>
            <Offset x={EXAMPLE_1_BORDER} y={EXAMPLE_1_BORDER} />
            <Path path={insidePath1} color={'#AFD3E2'} />
          </Group>
        }
      />
      <Squircle
        style={styleSheetSize(EXAMPLE_2_WIDTH, EXAMPLE_2_HEIGHT)}
        borderRadius={EXAMPLE_2_BORDER_RADIUS}
        maskChildren={
          <Rect x={0} y={0} width={EXAMPLE_2_WIDTH} height={EXAMPLE_2_HEIGHT}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(EXAMPLE_2_WIDTH, EXAMPLE_2_HEIGHT)}
              colors={['#FF6969', '#A6D0DD']}
            />
          </Rect>
        }
        skiaChildren={
          <Group>
            <Offset x={EXAMPLE_2_BORDER} y={EXAMPLE_2_BORDER} />
            {image1 && (
              <Mask mask={<Path path={insidePath2} />}>
                {image1 && (
                  <Image width={230} height={190} image={image1!} fit="cover" />
                )}
              </Mask>
            )}
            <Group>
              <Offset
                x={EXAMPLE_2_BORDER + EXAMPLE_2_INNER_BORDER}
                y={EXAMPLE_2_BORDER + EXAMPLE_2_INNER_BORDER}
              />
              <Mask mask={<Path path={insidePath2Inner} color={'green'} />}>
                <Rect
                  x={0}
                  y={0}
                  width={EXAMPLE_2_WIDTH}
                  height={EXAMPLE_2_HEIGHT}
                >
                  <LinearGradient
                    start={vec(EXAMPLE_2_BORDER, EXAMPLE_2_HEIGHT)}
                    end={vec(
                      EXAMPLE_2_WIDTH - EXAMPLE_2_BORDER,
                      EXAMPLE_2_HEIGHT
                    )}
                    colors={['#FFED00', 'red']}
                  />
                </Rect>
              </Mask>
            </Group>
          </Group>
        }
      />
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
