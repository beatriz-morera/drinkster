import React, { Suspense, lazy } from 'react';
import { RecoilRoot } from 'recoil';

import Loading from './components/loading';

const Search = lazy(() => import('./containers/search'));

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
