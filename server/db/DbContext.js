import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ThreadSchema } from '../models/Thread';
import {CommentSchema} from "../models/Comment"

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Threads = mongoose.model('Thread', ThreadSchema);

  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
