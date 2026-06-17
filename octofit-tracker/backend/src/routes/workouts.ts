import { Router, Request, Response } from 'express';

const router = Router();

// GET all workouts
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all workouts' });
});

// GET workout by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get workout ${id}` });
});

// POST create new workout
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Workout created' });
});

// PUT update workout
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Workout ${id} updated` });
});

// DELETE workout
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Workout ${id} deleted` });
});

export default router;
