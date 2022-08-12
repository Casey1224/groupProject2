import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ThreadSchema = new Schema(
  {
    img: { type: String, default: 'https:thiscatdoesnotexist.com' },    
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ThreadSchema.virtual('creatorInfo', {
    justOne: true,
    foreignField: '_id',
    localField: 'creatorId',
    ref: 'Account'
}) 



