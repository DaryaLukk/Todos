import { createContext } from 'react';

import { init } from '../reducer';
import { Context } from './types';

const initContext: Context = {
  state: init,
  dispatch: () => {},
};
const stateContext = createContext(initContext);
export default stateContext;