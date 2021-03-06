import * as React from 'react';
import Search from './Search';
import List from './List';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {


  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />

      <hr />
      <List />

    </div>
  );
}

export default App;
