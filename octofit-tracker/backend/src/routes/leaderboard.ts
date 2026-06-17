import { Router, Request, Response } from 'express';

const router = Router();

// GET global leaderboard
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get global leaderboard' });
});

// GET team leaderboard
router.get('/team/:teamId', (req: Request, res: Response) => {
  const { teamId } = req.params;
  res.json({ message: `Get leaderboard for team ${teamId}` });
});

// GET user stats
router.get('/user/:userId', (req: Request, res: Response) => {
  const { userId } = req.params;
  res.json({ message: `Get stats for user ${userId}` });
});

export default router;
