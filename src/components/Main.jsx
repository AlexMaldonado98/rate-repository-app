import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Routes, Route, Navigate } from 'react-router-native';
import SignIn from './SingIn';
import RepositoryView from './RepositoryView';
import ReviewForm from './ReviewForm';
import SingUp from './SingUp';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/singin" element={<SignIn />} exact />
        <Route path="/repository/:repoId" element={<RepositoryView />} exact />
        <Route path='/review'  element={<ReviewForm />} exact/>
        <Route path='/myreviews'  element={<MyReviews />} exact/>
        <Route path='/singup'  element={<SingUp />} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;