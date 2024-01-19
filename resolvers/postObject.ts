// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { Object } from "../types.ts";

import { ObjectModel, ObjectModelType } from "../db/object.ts";
import { getObjectFromModel } from "../controllers/getObjectFromModel.ts";

export const postSubject = async (
  req: Request<{}, {}, ObjectModelType>,
  res: Response<Object | { error: unknown }>
) => {
  try {
    //const { name, teacherID, studentsID, year } = req.body;
    //const subject = new ObjectModel({
    //  name,
    //  year,
    //  teacherID,
    //  studentsID,
    //});
    //await subject.save();

    //const subjectResponse: Object = await getObjectFromModel(object);

    //res.status(201).json(subjectResponse).send();
  } catch (error) {
    //res.status(500).send(error);
  }
};
