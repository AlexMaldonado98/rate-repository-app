import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const {data:dataGql,loading,refetch} = useQuery(GET_REPOSITORIES,{fetchPolicy:'cache-and-network'})
  const {repositories} = dataGql 
  const data = repositories ? repositories.edges.map(edge => edge.node) : []
  return {data, loading, refetch}
};

export default useRepositories;