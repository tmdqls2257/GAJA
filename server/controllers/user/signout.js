module.exports = (req, res) => {
  return res.status(205).json({ message: 'goodbye' })
}
