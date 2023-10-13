const xSmall = (arg = 'font') => {
  return arg == 'font' ? 15 : arg == 'icon' ? 18 : 15;
};

const small = (arg = 'font') => {
  return arg == 'font' ? 15 : arg == 'icon' ? 18 : 15;
};

const regular = (arg = 'font') => {
  return arg == 'font' ? 15 : arg == 'icon' ? 20 : 15;
};

const medium = (arg = 'font') => {
  return arg == 'font' ? 20 : arg == 'icon' ? 25 : 20;
};

const large = (arg = 'font') => {
  return arg == 'font' ? 40 : arg == 'icon' ? 38 : 40;
};

const xLarge = (arg = 'font') => {
  return arg == 'font' ? 15 : arg == 'icon' ? 18 : 15;
};

const dxLarge = (arg = 'font') => {
  return arg == 'font' ? 100 : arg == 'icon' ? 110 : 100;
};

export default size = {
  xSmall,
  regular,
  small,
  medium,
  large,
  xLarge,
  dxLarge
};
