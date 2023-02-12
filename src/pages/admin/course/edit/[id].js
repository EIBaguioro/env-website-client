import { useEffect, useState } from "react";
import CourseForm from "@/components/course-form";
import axios from "axios";
import { useRouter } from "next/router";

function Course() {

  const [courseToEdit, setCourseToEdit] = useState({});

  const router = useRouter();
  const { id } = router.query;

  const getCourse = async () => {
    return await axios.get(`http://localhost:8000/api/courses/${id}`);
  };

  useEffect(() => {
    getCourse()
      .then((response) => setCourseToEdit(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <CourseForm course={courseToEdit} />;
}

export default Course;
