import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';
import CourseContainer from './courses/CourseContainer';
import {CSSCourses, HTMLCourses, JSCourses} from '../data/courses';


const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={match.path+"/html"}>HTML</NavLink></li>
        <li><NavLink to={match.path+"/css"}>CSS</NavLink></li>
        <li><NavLink to={match.path+"/javascript"}>JavaScript</NavLink></li>
      </ul>
    </div>

    {/* Routes */}
    
    <Route exact path={match.path} render={()=><Redirect to={match.path+"/html"}/>}/>
    <Route path={match.path+"/html"} render={()=> <CourseContainer coursesList={HTMLCourses} /> } />
    <Route path={match.path+"/css"} render={()=> <CourseContainer coursesList={CSSCourses} /> } />
    <Route path={match.path+"/javascript"} render={()=> <CourseContainer coursesList={JSCourses} /> } />
  </div>
);

/**
 * Diferenta dintre component si render! https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render
 */

export default Courses;