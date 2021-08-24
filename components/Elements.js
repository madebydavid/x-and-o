import React from 'react';
import { TouchableOpacity } from 'react-native';

import { O, X } from './Icons';

// value can be null, "X", "O"
const Cell = ({ value, onPress }) => {
  return (
    <TouchableOpacity
      disabled={value !== null}
      onPress={onPress}
      style={{
        width: 50,
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {value == "X" && (<X/>)}
      {value == "O" && (<O/>)}
    </TouchableOpacity>
  );
}

export {
  Cell
};
