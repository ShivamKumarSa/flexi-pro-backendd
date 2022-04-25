import { Request, Response } from 'express';
import RAM from '../../models/ram.model';

export const createRAM = async (req: Request, res: Response) => {
  const { company, name, RAMType, clockSpeed, capacity, additionalInfo } = req.body;
  const newRAM = new RAM({ company, name, RAMType, clockSpeed, capacity, additionalInfo });
  console.log(newRAM);
  try {
    await newRAM.save();
    res.status(201).json(newRAM);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

export const getRAM = async (req: Request, res: Response) => {
  // Get id from req.body
  const { id } = req.body;
  console.log(id);
  try {
    const RAMData = await RAM.findById({ id });
    res.status(200).json(RAMData);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};

export const getRAMs = async (req: Request, res: Response) => {
  try {
    const RAMs = await RAM.find();
    res.status(200).json(RAMs);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};

export const getRAMsProcessorSpecific = async (req: Request, res: Response) => {
  try {
    const { supportedRAMArray } = req.body;
    console.log(supportedRAMArray);
    const RAMData = await RAM.find({ RAMType: { $in: supportedRAMArray } });
    console.log(RAMData);
    res.status(200).json(RAMData);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};
