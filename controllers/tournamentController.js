const Tournament = require('./../models/tournament')

exports.home = async (req, res) => {
  const dbTournaments = await Tournament.find()
  return res.render('tournaments/tournamentslist', {
    tournamentList: dbTournaments
  })
}

exports.create = async (req, res) => {
  res.render('tournaments/create')
}

exports.createForm = async (req, res) => {
  const { name, game, description, numberOfTeams } = req.body
  const newTournament = await Tournament.create({
    name,
    game,
    description,
    numberOfTeams
  })
  console.log(newTournament)
  res.redirect('/tournaments')
}
