import { Router } from 'express';
import { createEvent, deleteEvent, getAllEvents, getEvent, updateEvent } from '../controllers/event.controller';

const eventRoute = () => {
  const router = Router();

  router.post('/events', createEvent);

  router.get('/events', getAllEvents);

  router.get('/events/:id', getEvent);

  router.put('/events/:id', updateEvent);

  router.delete('/events/:id', deleteEvent);

  return router;
};

export { eventRoute };
