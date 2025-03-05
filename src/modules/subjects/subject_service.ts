import {ISubject, SubjectModel} from '../subjects/subject_models.js';

export class SubjectService {
    async postSubject(subject: Partial<ISubject>): Promise<ISubject> {
        const newSubject = new SubjectModel(subject);
        return newSubject.save();
    }

    async getAllSubjects(): Promise<ISubject[]> {
        return SubjectModel.find();
    }

    async getSubjectById(id: string): Promise<ISubject | null>{
        return SubjectModel.findById(id);
    }

    async updateSubjectById(id: string, subject: ISubject): Promise<ISubject | null> {
        return SubjectModel.findByIdAndUpdate(id, subject, {new: true});
    }

    async deleteSubjectById(id: string): Promise<ISubject | null> {
        return SubjectModel.findByIdAndDelete(id);
    }

    async UsersInSubject(id: string): Promise<ISubject | null> {
        return SubjectModel.findById(id).populate('users');
    }

    async getUsersInSubject(id: string): Promise<any[]> {
        const subject = await SubjectModel.findById(id).populate('users');
        return subject ? subject.users : [];
    }
}