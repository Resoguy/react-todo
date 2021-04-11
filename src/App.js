import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Toolbar from './components/Toolbar';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import UserDetailsPage from './pages/UserDetailsPage';
import TodoListPage from './pages/TodoListPage';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <Toolbar />

      <div className={styles.container}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/users" exact>
            <UsersPage />
          </Route>

          <Route path="/users/:id">
            <UserDetailsPage />
          </Route>

          <Route path="/posts">
            <PostsPage />
          </Route>

          <Route path="/todos">
            <TodoListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
