import { Router } from 'express';
const router = Router();
// GET all users
router.get('/', (req, res) => {
    res.json({ message: 'Get all users' });
});
// GET user by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get user ${id}` });
});
// POST create new user
router.post('/', (req, res) => {
    res.json({ message: 'User created' });
});
// PUT update user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User ${id} updated` });
});
// DELETE user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User ${id} deleted` });
});
export default router;
//# sourceMappingURL=users.js.map