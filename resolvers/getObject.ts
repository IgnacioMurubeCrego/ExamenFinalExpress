// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import { Object } from "../types.ts";

import { ObjectModel } from "../db/object.ts";
import {ObjectModelType} from "../db/object.ts"
import {getObjectFromModel} from "../controllers/getObjectFromModel.ts"

export const getObject = async (
  req: Request<{ id: string }>,
  res: Response<Object | { error: unknown }>
) => {
  const {id} = req.params;
  try {
    const object = await ObjectModel.findById(id).exec();
    if (!object) {
      //res.status(404).send({ error: "Object not found" });
      return;
    }
    const objectResponse: Object = await getObjectFromModel(object);
    //res.status(200).json(objectResponse).send();
  } catch (error) {
    //res.status(500).send(error);
  }
};
