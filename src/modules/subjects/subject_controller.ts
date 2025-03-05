import { Request, Response } from 'express';
import { ISubject } from '../subjects/subject_models.js';
import { SubjectService } from '../subjects/subject_service.js';

const subjectService = new SubjectService();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Create a new subject
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               difficulty:
 *                 type: string
 *               users:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: The subject was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 difficulty:
 *                   type: string
 *                 users:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: Error creating subject
 */
export async function postSubject(req: Request, res: Response): Promise<void> {
    try {
        const subject = req.body as ISubject;
        const newSubject = await subjectService.postSubject(subject);
        res.status(201).json(newSubject);
    } catch (error) {
        res.status(400).json({ message: "Error creating subject", error });
    }
}

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Get all subjects
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: List of all subjects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   teacher:
 *                     type: string
 *                   difficulty:
 *                     type: string
 *                   users:
 *                     type: array
 *                     items:
 *                       type: string
 *       400:
 *         description: Error getting subjects
 */
export async function getAllSubjects(req: Request, res: Response): Promise<void> {
    try {
        const subjects = await subjectService.getAllSubjects();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(400).json({ message: "Error getting subjects", error });
    }
}

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Get a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject ID
 *     responses:
 *       200:
 *         description: The subject description by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 difficulty:
 *                   type: string
 *                 users:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: Error getting subject
 */
export async function getSubjectById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const subject = await subjectService.getSubjectById(id);
        res.status(200).json(subject);
    } catch (error) {
        res.status(400).json({ message: "Error getting subject", error });
    }
}

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Update a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               difficulty:
 *                 type: string
 *               users:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: The updated subject
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 difficulty:
 *                   type: string
 *                 users:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: Error updating subject
 */
export async function updateSubjectById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const subject = req.body as ISubject;
        const updatedSubject = await subjectService.updateSubjectById(id, subject);
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(400).json({ message: "Error updating subject", error });
    }
}

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Delete a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject ID
 *     responses:
 *       200:
 *         description: The deleted subject
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 difficulty:
 *                   type: string
 *                 users:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: Error deleting subject
 */
export async function deleteSubjectById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const deletedSubject = await subjectService.deleteSubjectById(id);
        res.status(200).json(deletedSubject);
    } catch (error) {
        res.status(400).json({ message: "Error deleting subject", error });
    }
}

/**
 * @openapi
 * /api/subjects/{id}/users:
 *  get:
 *   summary: Get all users in a subject
 *   tags: [Subjects]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The subject ID
 *   responses:
 *    200:
 *      description: List of all users in a subject
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                age:
 *                  type: integer
 *                email:
 *                  type: string
 *    400:
 *      description: Error getting users in subject
 */
export async function UsersInSubject(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const subject = await subjectService.getSubjectById(id);
        if (!subject) {
            res.status(404).json({ message: "Subject not found" });
            return;
        }
        const users = await subjectService.getUsersInSubject(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: "Error getting users in subject", error });
    }
}