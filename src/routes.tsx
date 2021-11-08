// router
import {
  Route,
  Switch,
  useLocation,
  useHistory
} from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from 'history';
// pages
import {
  MainPage,
  MoviePage
} from 'pages';
// components
import { MovieDetailsModal } from 'components/modals';

interface LocationStateInterface {
  background: Location<LocationStateInterface>
}

// COMPONENT
export const Routes = () => {
  // Get the current location
  const location = useLocation<LocationStateInterface>();
  // Determine the action type
  const history = useHistory();
  let background;
  if (history.action !== 'POP') {
    // Try to get the previous location
    background = location.state && location.state.background;
  }

  // RENDER
  return (
    <>
      <Switch location={background || location}>
        {/* Main Page */}
        <Route path="/" exact>
          <MainPage />
        </Route>
        {/* Movie Page */}
        <Route path="/movie/:movieId" exact>
          <MoviePage />
        </Route>
      </Switch>

      {
        background && (
          <Route path="/movie/:movieId" exact>
            <MovieDetailsModal />
          </Route>
        )
      }
    </>
  );
};
