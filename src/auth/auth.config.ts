import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  secret: process.env.AUTH_SECRET || 'secret',
  expire_in: process.env.AUTH_EXPIRE_IN || 1000,
}));
