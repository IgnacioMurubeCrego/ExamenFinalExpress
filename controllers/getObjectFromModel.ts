import { ObjectModelType } from "../db/object.ts";
import { Object } from "../types.ts";

export const getObjectFromModel = async (
  subject: ObjectModelType
): Promise<Object> => {
  //const { _id, name, year, teacherID, studentsID } = object;

  //const teacher = await TeacherModel.findById(teacherID);
  //if (!teacher) throw new Error("Teacher not found");

  //const students = await StudentModel.find({ _id: { $in: studentsID } });

  return {
    //id: _id.toString(),
    //name,
    //year,
    //teacher: {
    //  id: teacher._id.toString(),
    //  name: teacher.name,
    //  email: teacher.email,
    //},
    //students: students.map((student) => ({
    //  id: student._id.toString(),
    //  name: student.name,
    //  email: student.email,
    //})),
  };
};
