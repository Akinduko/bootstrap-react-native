/* eslint-disable react/no-typos */
import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Loader from '<components>/Loader';

const MutationContainer = ({ Component, mutation, variables, onCompleted, update }) => {
  return (
    <Mutation
      mutation={mutation}
      variables={variables}
      onCompleted={onCompleted}
      update={(store, { data }) => update(store, data)}>
      {({ loading, error, data }) => {
        if (loading) return <Loader loading={loading} />;
        if (error)
          return (
            <View>
              <Text>Error</Text>
            </View>
          );

        return <Component data={data} />;
      }}
    </Mutation>
  );
};

MutationContainer.propTypes = {
  Component: PropTypes.func,
  onCompleted: PropTypes.func,
  update: PropTypes.func,
  mutation: PropTypes.func,
  variables: PropTypes.any
};

MutationContainer.defaultProps = {
  mutation: () => {},
  update: () => {},
  onCompleted: () => {},
  Component: () => {},
  variables: {}
};

export default MutationContainer;
