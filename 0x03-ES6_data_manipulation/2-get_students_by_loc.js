export default function getStudentsByLocation(students, city) {
  const filterStudent = students.filter((student) => student.location === city);
  return filterStudent;
}
