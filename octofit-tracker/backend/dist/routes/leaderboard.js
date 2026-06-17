import { Router } from 'express';
const router = Router();
// GET global leaderboard
router.get('/', (req, res) => {
    res.json({ message: 'Get global leaderboard' });
});
// GET team leaderboard
router.get('/team/:teamId', (req, res) => {
    const { teamId } = req.params;
    res.json({ message: `Get leaderboard for team ${teamId}` });
});
// GET user stats
router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({ message: `Get stats for user ${userId}` });
});
export default router;
//# sourceMappingURL=leaderboard.js.map