import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const O = ({ scale = 1, color = 'black', ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    width={24 * scale}
    height={24 * scale}
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

const X = ({ scale = 1, color = 'black', ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    width={24 * scale}
    height={24 * scale}
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M18 6L6 18M6 6l12 12" />
  </Svg>
);

export {
  O,
  X
}