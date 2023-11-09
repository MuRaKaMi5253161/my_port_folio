import React from 'react';
import Top from './components/Top';
import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Top />
    </div>
  );
}

export default App;
