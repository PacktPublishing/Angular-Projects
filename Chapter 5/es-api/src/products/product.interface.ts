import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
