// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';



function App() {
  return (
    <div className = "app-header">
      
      <div className = "header-div">
        <Header />
      </div>    
      <div className = "image-list-div">
        <ImageList />
      </div>


    </div>
  );
}

export default App;
