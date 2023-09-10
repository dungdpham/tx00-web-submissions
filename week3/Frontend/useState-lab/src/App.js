import React, { useState } from 'react';
import './App.css';
import itemsData from './data';
import Review from './Review';

function App() {
  const [items, setItems] = useState(itemsData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Item List</h1>
      </header>
      <main>
        <section className="container">
          <div className="title">
            <h2>Items</h2>
          </div>
          <div className="item-list">
            {items.map((item) => (
              <Review key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;