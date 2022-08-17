import React from 'react';
import 'App.css';
import { Link, Route } from 'wouter'
import Home from 'pages/Home/indejx';
import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';
import StaticContext from 'context/StaticContext';
import { GifContextProvider } from 'context/GifsContext';

function App() {

  return (
    <StaticContext.Provider value= {{test: 'test text', test_nro: 323201 }}>
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt="app logo" src="./logo.png" />
        </Link>
        <GifContextProvider> {/*all childrens have access to this context*/}
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
