import { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import Filter from './Filter';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, changeFilter, FilterCurrent }) => {
  const navigate = useNavigate();
  return (
    <FlatList
      data={repositories}
      ListHeaderComponent={() => <Filter changeFilter={changeFilter} FilterCurrent={FilterCurrent} />}
      renderItem={({ item }) => <Pressable onPress={() => navigate(`/repository/${item.id}`)}><RepositoryItem item={item} /></Pressable>}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const RepositoryList = () => {

  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [FilterCurrent, setFilterCurrent] = useState("Latest Repositories");
  const { data: repositoryNodes } = useRepositories({ orderBy, orderDirection });

  const changeFilter = (orderBy,orderDirection,filter) => {
    setOrderBy(orderBy),
    setOrderDirection(orderDirection);
    setFilterCurrent(filter);
  };

  return (
    <RepositoryListContainer repositories={repositoryNodes} changeFilter={changeFilter} FilterCurrent={FilterCurrent} />
  );
};

export default RepositoryList;