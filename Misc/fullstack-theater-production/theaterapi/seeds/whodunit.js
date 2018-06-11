
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('whodunit').del()
    .then(function () {
      // Inserts seed entries
      return knex('whodunit').insert([
        {id: 1, murderer: 'Steve Jobs',weapon: 'MacBook Pro',room: 'Huddle Room'},
        {id: 2, murderer: 'Steve Jobs',weapon: 'MacBook Pro',room: 'Quandary'},
        {id: 3, murderer: 'Steve Jobs',weapon: 'MacBook Pro',room: 'Galvanize Staircase'},
        {id: 4, murderer: 'Steve Jobs',weapon: 'Poisonous Code Bug',room: 'Huddle Room'},
        {id: 5, murderer: 'Steve Jobs',weapon: 'Poisonous Code Bug',room: 'Quandary'},
        {id: 6, murderer: 'Steve Jobs',weapon: 'Poisonous Code Bug',room: 'Galvanize Staircase'},
        {id: 7, murderer: 'Steve Jobs',weapon: 'Failure to Commit',room: 'Huddle Room'},
        {id: 8, murderer: 'Steve Jobs',weapon: 'Failure to Commit',room: 'Quandary'},
        {id: 9, murderer: 'Steve Jobs',weapon: 'Failure to Commit',room: 'Galvanize Staircase'},
        {id: 10, murderer: 'Ada Lovelace',weapon: 'MacBook Pro',room: 'Huddle Room'},
        {id: 11, murderer: 'Ada Lovelace',weapon: 'MacBook Pro',room: 'Quandary'},
        {id: 12, murderer: 'Ada Lovelace',weapon: 'MacBook Pro',room: 'Galvanize Staircase'},
        {id: 13, murderer: 'Ada Lovelace',weapon: 'Poisonous Code Bug',room: 'Huddle Room'},
        {id: 14, murderer: 'Ada Lovelace',weapon: 'Poisonous Code Bug',room: 'Quandary'},
        {id: 15, murderer: 'Ada Lovelace',weapon: 'Poisonous Code Bug',room: 'Galvanize Staircase'},
        {id: 16, murderer: 'Ada Lovelace',weapon: 'Failure to Commit',room: 'Huddle Room'},
        {id: 17, murderer: 'Ada Lovelace',weapon: 'Failure to Commit',room: 'Quandary'},
        {id: 18, murderer: 'Ada Lovelace',weapon: 'Failure to Commit',room: 'Galvanize Staircase'},
        {id: 19, murderer: 'Octocat',weapon: 'MacBook Pro',room: 'Huddle Room'},
        {id: 20, murderer: 'Octocat',weapon: 'MacBook Pro',room: 'Quandary'},
        {id: 21, murderer: 'Octocat',weapon: 'MacBook Pro',room: 'Galvanize Staircase'},
        {id: 22, murderer: 'Octocat',weapon: 'Poisonous Code Bug',room: 'Huddle Room'},
        {id: 23, murderer: 'Octocat',weapon: 'Poisonous Code Bug',room: 'Quandary'},
        {id: 24, murderer: 'Octocat',weapon: 'Poisonous Code Bug',room: 'Galvanize Staircase'},
        {id: 25, murderer: 'Octocat',weapon: 'Failure to Commit',room: 'Huddle Room'},
        {id: 26, murderer: 'Octocat',weapon: 'Failure to Commit',room: 'Quandary', didit: true},
        {id: 27, murderer: 'Octocat',weapon: 'Failure to Commit',room: 'Galvanize Staircase'}

      ])
    })
}
