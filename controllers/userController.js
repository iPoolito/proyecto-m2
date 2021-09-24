exports.profile = async (req, res) => {
  res.render('user/profile', { foundUser: req.session.currentUser })
}
exports.logOut = (req, res) => {
  // ELIMINAR LA COOKIE DEL NAVEGADOR
  req.session.destroy(err => {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
}
