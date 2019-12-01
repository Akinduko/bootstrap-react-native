/* eslint-disable react/no-typos */
import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const QueryContainer = ({ Component, query }) => {
  return (
    <Query query={query}>
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
  query: PropTypes.func
};

QueryContainer.defaultProps = {
  query: () => {},
  Component: () => {}
};

export default QueryContainer;
