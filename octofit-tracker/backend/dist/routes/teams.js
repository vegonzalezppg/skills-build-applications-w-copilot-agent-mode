import { Router } from 'express';
const router = Router();
// GET all teams
router.get('/', (req, res) => {
    res.json({ message: 'Get all teams' });
});
// GET team by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get team ${id}` });
});
// POST create new team
router.post('/', (req, res) => {
    res.json({ message: 'Team created' });
});
// PUT update team
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Team ${id} updated` });
});
// DELETE team
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Team ${id} deleted` });
});
export default router;
//# sourceMappingURL=teams.js.map