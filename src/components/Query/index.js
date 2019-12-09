/* eslint-disable react/no-typos */
import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const QueryContainer = ({ Component, query, onCompleted, update }) => {
  return (
    <Query
      query={query}
      onCompleted={onCompleted}
      update={(store, { data }) => update(store, data)}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <View>
              <Text>Fetching</Text>
            </View>
          );
        if (error)
          return (
            <View>
              <Text>Error</Text>
            </View>
          );

        return <Component data={data} />;
      }}
    </Query>
  );
};

QueryContainer.propTypes = {
  Component: PropTypes.func,
  query: PropTypes.func,
  onCompleted: PropTypes.func,
  update: PropTypes.func
};

QueryContainer.defaultProps = {
  query: () => {},
  update: () => {},
  onCompleted: () => {},
  Component: () => {}
};

export default QueryContainer;
