import React from 'react';
import { FlatList } from 'react-native';
import ForecastCard from './ForecastCard';
const ForecastCardList = ({
  data,
  initialNumToRender = 5,
  horizontal = false
}) => {
  const renderItem = ({ item }) => (
    <ForecastCard
      conditon={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      temp={item.main.temp}
    />
  );

  return (
    <FlatList
      horizontal={horizontal}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.dt_txt}
      initialNumToRender={initialNumToRender}
    />
  );
};

export default ForecastCardList;
