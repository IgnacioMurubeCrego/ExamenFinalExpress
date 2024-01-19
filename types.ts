export type Teacher = {
  id: string;
  name: string;
  email: string;
  subjects: Array<Omit<Subject, "teacher" | "students">>;
};

export type Subject = {
  id: string;
  name: string;
  year: string;
  // Este type es del cliente, por tanto un obj Teacher sin sus 'subjects'
  // De esta forma evitamos redundancias.
  teacher?: Omit<Teacher, "subjects">; 
  students: Array<Omit<Student, "subjects">>;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  subjects: Array<Omit<Subject, "students" >>;
};
