import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';



export const taskSchema = zod.object({
    name: zod.string().min(1).max(100),
    detail: zod.string().min(1).max(1000).optional(),
    end_date: zod.string().date().optional(),
});