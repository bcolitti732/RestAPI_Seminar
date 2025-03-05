import {Router} from 'express';

const router = Router();

import { postSubject, getAllSubjects, getSubjectById, deleteSubjectById, updateSubjectById, UsersInSubject} from '../subjects/subject_controller.js';

router.get("/", getAllSubjects);
router.post("/", postSubject);
router.get('/:id', getSubjectById);
router.put('/:id', updateSubjectById);
router.delete('/:id', deleteSubjectById);
router.get('/:id/users', UsersInSubject);

export default router;