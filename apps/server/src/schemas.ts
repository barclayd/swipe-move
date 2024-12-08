import { z } from 'zod';
import { propertyStatus } from './types';

export const swipeSchema = z.object({
  propertyId: z.number(),
  status: z.enum(propertyStatus),
});
