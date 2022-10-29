import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const DATABASE_PROVIDER = {
  provide: 'DbConnectionToken',
  useFactory: async (): Promise<typeof mongoose> =>
    await mongoose.connect(
      'mongodb://username:password1@ds015700.mlab.com:15700/products',
    ),
};

@Module({
  providers: [DATABASE_PROVIDER],
  exports: [DATABASE_PROVIDER],
})
export class DatabaseModule {}
