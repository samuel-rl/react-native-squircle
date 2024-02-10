import React, { useMemo, useState } from 'react';
import { type LayoutChangeEvent, StyleSheet, View } from 'react-native';

import {
  Canvas,
  Mask,
  Path,
  type Color,
  Group,
} from '@shopify/react-native-skia';
import { drawSquirclePath } from '../utils/functions';
import type { StyleProp } from 'react-native';
import type { ViewStyle } from 'react-native';

interface SquircleProps {
  /**
   * The radius of the squircle.
   *
   */
  borderRadius?: number;

  /**
   * The background color of the squircle.
   *
   * @default #FFFFFF
   */
  backgroundColor?: Color;

  /**
   * The higher the value, the smoother the border.
   *
   * @default 1
   */
  borderSmoothing?: number;

  /**
   * React children.
   *
   */
  children?: React.ReactNode | React.ReactNode[];

  /**
   * Skia node that will be masked by the squircle.
   *
   */
  maskChildren?: React.ReactNode | React.ReactNode[];

  /**
   * Style for the container component.
   *
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Skia node that will be draw inside the Skia Canvas.
   *
   */
  skiaChildren?: React.ReactNode | React.ReactNode[];
}

const Squircle = ({
  borderRadius = 16,
  backgroundColor = '#FFFFFF',
  borderSmoothing = 1,
  children,
  maskChildren,
  style,
  skiaChildren,
}: SquircleProps) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
    setHeight(event.nativeEvent.layout.height);
  };

  const path = useMemo(() => {
    return drawSquirclePath({
      borderSmoothing,
      borderRadius,
      width,
      height,
    });
  }, [width, height, borderRadius, borderSmoothing]);

  return (
    <View style={style || styles.container} onLayout={onLayout}>
      <Canvas style={StyleSheet.absoluteFill}>
        {maskChildren || skiaChildren ? (
          <Group>
            {maskChildren && (
              <Mask mask={<Path path={path} color={backgroundColor} />}>
                {maskChildren}
              </Mask>
            )}
            {skiaChildren}
          </Group>
        ) : (
          <Path path={path} color={backgroundColor} />
        )}
      </Canvas>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Squircle;
