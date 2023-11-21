import { Request, Response } from "express";
import { NextFunction } from "express";
import { StudentServices } from "./student.service";

const createStuden = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const student = req.body.student;

    const result = await StudentServices.creatStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = { createStuden };
