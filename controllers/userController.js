exports.profile = async (req, res) => {
  res.render('user/profile', { foundUser: req.session.currentUser })
}
