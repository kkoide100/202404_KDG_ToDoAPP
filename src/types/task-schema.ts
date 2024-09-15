import zod from 'zod';

const status = zod.enum(['New', 'Ready', 'In Progress', 'In Review', 'Done']);

export const searchTaskSchema = zod.object({
    name: zod.string().optional(),
    end_date: zod.string().date().optional(),
    detail: zod.string().optional(),
});

export const createTaskSchema = zod.object({
    name: zod.string().min(1),
    end_date: zod.string().date().optional(),
    detail: zod.string().optional(),
    status: status.default('New').optional(),
});
