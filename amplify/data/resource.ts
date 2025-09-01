import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Data schema for the app.
 * Defines a single model: Expense { name: string, amount: float }
 */
const schema = a.schema({
  Expense: a.model({
    name: a.string(),
    amount: a.float(),
  }).authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: { defaultAuthorizationMode: 'userPool' },
});

