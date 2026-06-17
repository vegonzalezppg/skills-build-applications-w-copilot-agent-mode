import { Router, Request, Response } from 'express';

const router = Router();

// GET all users
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all users' });
});

// GET user by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get user ${id}` });
});

// POST create new user
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'User created' });
});

// PUT update user
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `User ${id} updated` });
});

// DELETE user
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted` });
});

export default router;
