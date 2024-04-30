const getListStudentIds = (listStudents) => {
  let listStudentIds = [];
  if (!Array.isArray(listStudents)) {
    return listStudentIds;
  }
  // Use destructuring within the map function to extract the 'id' property
  listStudentIds = listStudents.map(({ id }) => id);
  return listStudentIds;
};

export default getListStudentIds;
