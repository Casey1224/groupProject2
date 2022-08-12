import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema(
    {
        text: {type: String, minlength: 1, maxlength: 100, required: true},
        found: {type: Boolean, default:false}, 
        threadId: {type: Schema.Types.ObjectId, required: true, ref: 'Thread'},
        userId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
        
    },

    { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('user', {
    justOne: true,
    foreignField: '_id',
    localField: 'userId',
    ref: 'Account'
  })