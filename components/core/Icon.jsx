import React from 'react';
import { Feather } from '@expo/vector-icons';

const _FeatherIcon = (props) => {
  return <Feather {...props} />;
};

const AppIconSun = ({ props, size, color = 'black', style = {} }) => {
  return _FeatherIcon(props || { name: 'sun', size, color, style });
};

export { AppIconSun };
