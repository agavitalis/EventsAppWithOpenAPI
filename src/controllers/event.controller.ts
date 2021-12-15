import { Request, Response } from 'express';
import { Event, EventInput } from '../models/event.model';

const createEvent = async (req: Request, res: Response) => {
  const { description, name } = req.body;

  if (!name || !description) {
    return res.status(422).json({ message: 'The fields name and description are required' });
  }

  const EventInput: EventInput = {
    name,
    description,
  };

  const EventCreated = await Event.create(EventInput);

  return res.status(201).json({ data: EventCreated });
};

const getAllEvents = async (req: Request, res: Response) => {
  const events = await Event.find().sort('-createdAt').exec();

  return res.status(200).json({ data: events });
};

const getEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  const event = await Event.findOne({ _id: id });

  if (!event) {
    return res.status(404).json({ message: `Event with id "${id}" not found.` });
  }

  return res.status(200).json({ data: Event });
};

const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, name } = req.body;

  const event = await Event.findOne({ _id: id });

  if (!event) {
    return res.status(404).json({ message: `Event with id "${id}" not found.` });
  }

  if (!name || !description) {
    return res.status(422).json({ message: 'The fields name and description are required' });
  }

  await Event.updateOne({ _id: id }, { name, description });

  const eventUpdated = await Event.findById(id, { name, description });

  return res.status(200).json({ data: eventUpdated });
};

const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Event.findByIdAndDelete(id);

  return res.status(200).json({ message: 'Event deleted successfully.' });
};

export { createEvent, deleteEvent, getAllEvents, getEvent, updateEvent };
