export default function handler(req, res) {
    const { quantity } = req.params.quantity;
    res.status(200).json({ quantity})
}