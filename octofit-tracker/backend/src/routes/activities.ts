import { Router, Request, Response } from 'express';

const router = Router();

// GET all activities
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all activities' });
});

// GET activity by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get activity ${id}` });
});

// POST create new activity
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Activity created' });
});

// PUT update activity
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Activity ${id} updated` });
});

// DELETE activity
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Activity ${id} deleted` });
});

export default router;
