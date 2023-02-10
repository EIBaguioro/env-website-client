import { useEffect, useState } from "react";
import CourseForm from "@/components/course-form";
import axios from "axios";

function Course() {
  const [courseToEdit, setCourseToEdit] = useState({});
  const getCourse = async () => {
    return await axios.get("http://localhost:8000/api/courses/34");
  };

  useEffect(() => {
    getCourse()
      .then((response) => setCourseToEdit(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <CourseForm course={courseToEdit} />;
}

export default Course;
