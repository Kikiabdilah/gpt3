import './App.css';
import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibillity, WhatGPT3 } from './containers';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibillity />
      <CTA />
      <Blog />
      <Footer />
    </div>

  );
}

export default App;
