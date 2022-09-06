import React from 'react';
import './App.css';
import PageLayout from './layout/Layout';
import { MainRoutes } from './layout/MainRoute';

function App() {
  return (

    <PageLayout>
      <React.Suspense>
        {MainRoutes}
      </React.Suspense>   
    </PageLayout>

  );
}

export default App;
