import {ObjectId, Schema, model} from 'mongoose';

export interface ISubject {
  name: string;
  teacher: string;
  difficulty: string;
  users: ObjectId[];
}

const subjectSchema = new Schema<ISubject>({
  name: {type: String, required: true},
  teacher: {type: String, required: true},
  difficulty: {type: String, required: true},
  users: [{type: Schema.Types.ObjectId, ref: "User"}]
});

export const SubjectModel = model("Subject", subjectSchema);