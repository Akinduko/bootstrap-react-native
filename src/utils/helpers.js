export const formatPhone = phone => {
  return phone.replace(/ |\+|\-|\(|\)/g, '').replace(/^0/, '234');
};

export const parseBanks = array => {
  return array.map(each => {
    return {
      value: each.code,
      label: each.name,
      color: '#212121'
    };
  });
};
