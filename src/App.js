//import logo from './logo.svg';
import './css/App.css';

// REFERENCE:
// useContext https://dmitripavlutin.com/react-context-and-usecontext/#:~:text=React%20context%20provides%20data%20to%20components%20no%20matter,global%20state%2C%20theme%2C%20services%2C%20user%20settings%2C%20and%20more.
// https://www.freecodecamp.org/news/react-context-api-explained-with-examples/
// https://react.dev/learn/passing-data-deeply-with-context
// Photo images all from https://picsum.photos/
// Faster load times with images https://chatgpt.com/share/67116c8f-2144-8005-9868-fab8ae9325f0



// import Header from './components/global/Header';
// import Footer from './components/global/Footer';
// import Carousel from './components/homePage/Carousel';
import HomePage from "./views/HomePage";


function App() {
  return (
      // <RegionsProvider>
          <div className="App m-0 p-0">
              <div id="wrapper">
                  <HomePage></HomePage>
              </div>
          </div>
      // </RegionsProvider>
  );
}

export default App;
