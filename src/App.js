import React, { useState } from 'react';
import data from './data';
import List from './list';

function App() {

  const [people,setPeople] = useState(data)

  return (
    <main>
      
      <section className="container">
      <div>BIRTHDAY REMINDER</div>
        <h3>{people.length} Birthday today</h3>
        <List  people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
