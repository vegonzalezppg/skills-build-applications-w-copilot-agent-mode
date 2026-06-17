import { Router } from 'express';
const router = Router();
// GET all activities
router.get('/', (req, res) => {
    res.json({ message: 'Get all activities' });
});
// GET activity by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get activity ${id}` });
});
// POST create new activity
router.post('/', (req, res) => {
    res.json({ message: 'Activity created' });
});
// PUT update activity
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Activity ${id} updated` });
});
// DELETE activity
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Activity ${id} deleted` });
});
export default router;
//# sourceMappingURL=activities.js.map