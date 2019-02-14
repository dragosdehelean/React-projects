import React from 'react';
import Course from './Course';

const CourseContainer = ({ coursesList }) => {

  return (
    <div>
      <ul>
        {
          coursesList.map((course) => (
            <Course title={course.title}
              desc={course.description}
              img={course.img_src}
              key={course.id} />
          ))
        }
      </ul>
    </div>
  );
}

export default CourseContainer;