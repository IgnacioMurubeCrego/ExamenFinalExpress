// @deno-types="npm:@types/express@4"
import { Request, Response } from "express";
import { Object } from "../types.ts";

import { ObjectModel } from "../db/Object.ts";
import { getObjectFromModel } from "../controllers/getObjectFromModel.ts";

export const getSubjects = async (
  req: Request,
  res: Response<Object[] | { error: unknown }>
) => {
  try {
    const objects = await ObjectModel.find({}).exec();
    //const objectsResponse: Object[] = await Promise.all(
      //objetcs.map((object) => getObjectFromModel(object))
    //);
    //res.status(200).json(objectsResponse).send();
  } catch (error) {
    //res.status(500).send(error);
  }
};
