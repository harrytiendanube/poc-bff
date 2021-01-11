import { registerAs } from '@nestjs/config';

export default registerAs('api-client', () => ({
  url: process.env.APICLIENT_URL || 'http://localhost',
}));
