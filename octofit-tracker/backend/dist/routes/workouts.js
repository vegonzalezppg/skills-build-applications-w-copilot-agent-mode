import { Router } from 'express';
const router = Router();
// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: 'Get all workouts' });
});
// GET workout by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get workout ${id}` });
});
// POST create new workout
router.post('/', (req, res) => {
    res.json({ message: 'Workout created' });
});
// PUT update workout
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Workout ${id} updated` });
});
// DELETE workout
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Workout ${id} deleted` });
});
export default router;
//# sourceMappingURL=workouts.js.map