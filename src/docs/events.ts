const eventResponse = {
  _id: {
    type: 'string',
    example: '605636683f6e29c81c8b2db0',
  },
  name: {
    type: 'string',
    example: "Event's name",
  },
  description: {
    type: 'string',
    example: "Event's description",
  },
  status: {
    type: 'string',
    example: "Event's status",
  },
  createdAt: {
    type: 'string',
    example: '2021-03-19T09:51:01.506Z',
  },
  updatedAt: {
    type: 'string',
    example: '2021-03-19T11:48:25.980Z',
  },
};

const internalServerError = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Internal Server Error',
          },
        },
      },
    },
  },
};

const eventNotFound = {
  description: 'Resource not found',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Event with id: "71675fcb655047cdc4955929" not found',
          },
        },
      },
    },
  },
};

const invalidEventData = {
  description: 'Invalid Data provided',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'The fields name and description are required',
          },
        },
      },
    },
  },
};

const security = [
  {
    bearerAuth: [],
  },
];

const createOrUpdateEventBody = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Birthday Ceremony',
    },
    description: {
      type: 'string',
      example: 'Birthday Celebration for Mr Vitalis',
    },
    status: {
      type: 'string',
      example: 'Pending',
    },
  },
};

const createEvent = {
  tags: ['Events'],
  description: 'Create a new event in the system',
  operationId: 'createEvent',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createOrUpdateEventBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '201': {
      description: 'Event created successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: eventResponse,
          },
        },
      },
    },
    '422': invalidEventData,
    '500': internalServerError,
  },
};

const getEvents = {
  tags: ['Events'],
  description: 'Retrieve all the events',
  operationId: 'getEvents',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Events retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: eventResponse,
            },
          },
        },
      },
    },
    '500': internalServerError,
  },
};

const getEvent = {
  tags: ['Events'],
  description: 'Retrieve one event',
  operationId: 'getEvent',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Event ID',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    '200': {
      description: 'Event retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: eventResponse,
          },
        },
      },
    },
    '404': eventNotFound,
    '500': internalServerError,
  },
};

const updateEvent = {
  tags: ['Events'],
  description: 'Update a event',
  operationId: 'updateEvent',
  security,
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Event ID',
      required: true,
      type: 'string',
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createOrUpdateEventBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'Event retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: eventResponse,
          },
        },
      },
    },
    '404': eventNotFound,
    '422': invalidEventData,
    '500': internalServerError,
  },
};

const deleteEvent = {
  tags: ['Events'],
  description: 'Delete a event',
  operationId: 'deleteEvent',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Event ID',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    '200': {
      description: 'Event created successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Event deleted successfully!',
              },
            },
          },
        },
      },
    },
    '500': internalServerError,
  },
};

export { createEvent, createOrUpdateEventBody, deleteEvent, getEvents, getEvent, updateEvent };
