import { Router, Request, Response } from 'express';

const router = Router();

// GET all teams
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all teams' });
});

// GET team by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get team ${id}` });
});

// POST create new team
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Team created' });
});

// PUT update team
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Team ${id} updated` });
});

// DELETE team
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Team ${id} deleted` });
});

export default router;
