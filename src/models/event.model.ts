import mongoose, { Schema, Model, Document } from 'mongoose';

type EventDocument = Document & {
  name: string;
  description: string | null;
  status: string;
};

type EventInput = {
  name: EventDocument['name'];
  description: EventDocument['description'];
};

const eventSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: Schema.Types.String,
      default: null,
    },
    status: {
      type: Schema.Types.String,
      enum: ['Pending','Ongoing','Done'],
      default: 'Pending',
    },
  },
  {
    collection: 'events',
    timestamps: true,
  },
);

const Event: Model<EventDocument> = mongoose.model<EventDocument>('Event', eventSchema);

export { Event, EventInput, EventDocument };
