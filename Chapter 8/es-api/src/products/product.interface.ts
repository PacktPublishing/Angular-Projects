import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
}
