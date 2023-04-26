import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Ngo from './components/Ngo'
import HomePage from './components/HomePage';
import BlogsPage from './components/BlogsPage';
import EventsPage from './components/EventsPage';
import Analytics from './components/Analytics';
import { useEffect } from 'react';
import Form from './forms/blogs';
import EventForm from './forms/events';
import CreateNgo from './components/CreateNgo'

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        {/* <Form/> */}
        {/* <eventForm/> */}
    <Routes>

    <Route exact path="/" element=<HomePage /> />
    <Route exact path="/0" element=<HomePage /> />
    <Route exact path="/1" element=<Ngo /> />
    <Route exact path="/2" element=<BlogsPage /> />
    <Route exact path="/3" element=<EventsPage /> />
    <Route exact path="/4" element=<Analytics /> />
    <Route exact path="/5" element=<CreateNgo /> />
    <Route exact path="/create-blog" element=<Form /> />
    <Route exact path="/create-event" element=<EventForm /> />
      
    </Routes>
      {/* <MainDash/>
        <RightSide/> */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
