import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ThreadSchema } from '../models/Thread';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Threads = mongoose.model('Thread', ThreadSchema);
}

export const dbContext = new DbContext()
