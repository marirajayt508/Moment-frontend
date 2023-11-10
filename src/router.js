import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './components/addUser';
import Moment from './components/addMoment';

const BlogRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<User />} />
        <Route path="/moment" exact element={<Moment />} />
        <Route path="*" exact element={<User />} />
      </Routes>
    </Router>
  );
};

export default BlogRoute;