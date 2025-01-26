import { z } from 'zod';

export const LocationScalarFieldEnumSchema = z.enum([
  'id',
  'company',
  'description',
  'lat',
  'long',
  'street',
  'line',
  'state',
  'trends_value',
  'image',
]);
