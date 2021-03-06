import React from 'react';
import Header from 'Components/Header';
import { renderRoutes } from 'react-router-config';
import styles from './index.less';
// import withStyle from '../../withStyle';

const App = (props) => {
  return (
    <div>
      <Header staticContext={ props.staticContext }/>
      {
        renderRoutes(props.route.routes)
      }
    </div>
  );
}

// export default withStyle(App, styles);
export default App;