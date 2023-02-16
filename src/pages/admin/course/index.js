import CourseForm from "@/components/course-form";
import { ProtectedRoute } from "@/components/protected-route/protected-route";

function Course() {
  return (
    <ProtectedRoute>
      <CourseForm />
    </ProtectedRoute>
  );
}

export default Course;
