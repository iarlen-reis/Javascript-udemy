import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
  const pesistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example']
    },
    reducers
  );

  return pesistedReducers;
};
