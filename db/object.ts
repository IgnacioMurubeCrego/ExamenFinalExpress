import mongoose from "mongoose";
import { Object } from "../types.ts";

const Schema = mongoose.Schema;

const objectSchema = new Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true },
    teacherID: { type: Schema.Types.ObjectId, required: false, default: null, ref: "Teacher" },
    studentsID: [
      { type: Schema.Types.ObjectId, required: true, ref: "Student" },
    ],
  },
  { timestamps: true }
);

// validate OtherObject
objectSchema
  .path("paramNameToReferenceOtherObject")
  .validate(async function (otherObjectsIDs: mongoose.Types.ObjectId[]) {
    try {
      if (otherObjectsIDs.some((id) => !mongoose.isValidObjectId(id))) return false;

      //const objects = await OtherObjectModel.find({ _id: { $in: otherObjectsIDs } });
      //return objects.length === otherObjectsIDs.length;
    } catch (e) {
      return false;
    }
  });


export type ObjectModelType = mongoose.Document & 
  Omit<Object, "id" | "teacher" | "students"> & {
    teacherID: mongoose.Types.ObjectId;
    studentsID: Array<mongoose.Types.ObjectId>;
  };

export const ObjectModel = mongoose.model<ObjectModelType>(
  "Object",
  objectSchema
);
