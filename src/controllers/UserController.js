const knex = require('../db');

module.exports = {
  async index(req, res) {
    const results = await knex('users')

    return res.json(results)
  },

  async create(req, res, next) {
    try {
      const { username, firstname, lastname, email, role_id } = req.body;

      if (![1, 2, 3].includes(role_id)) {
        return res.status(403).json(
          { 'error': 'Invalid Role ID. Valid IDs are: 1, 2, 3.' }
        )
      }

      await knex('users').insert({
        username, firstname, lastname, email, role_id
      })

      const created = await knex('users')
        .select('*')
        .where('email', email)
        .first()
      
      return res.status(201).json(created)

    } catch (err) {
      next(err)
    }
  },

  async fetch(req, res, next) {
    try {
      const { id } = req.params;

      const user = await knex('users')
        .where('id', id)
        .first()
      
        if (!user) {
          return res.status(404).json({ 'error': 'User not found.' })
        }

        const fetched = await knex('users')
          .select('*')
          .where('id', id)
          .first()
        
        return res.status(200).json(fetched)

      } catch(err) {
      next(err)
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const user = await knex('users')
        .where('id', id)
        .first()
      
        if (!user) {
          return res.status(404).json({ 'error': 'User not found.' })
        }

        const { username, firstname, lastname, email, role_id } = req.body;

        if (![1, 2, 3].includes(role_id)) {
          return res.status(403).json(
            { 'error': 'Invalid Role ID. Valid IDs are: 1, 2, 3.' }
          )
        }
        
        await knex('users')
          .update({
            username, firstname, lastname, email, role_id
          })
          .where('id', id)
          .select('*')
        
          const updated = await knex('users')
            .select('*')
            .where('id', id)
            .first()
        
          return res.status(200).json(updated)

    } catch(err) {
      next(err)
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const user = await knex('users')
        .where('id', id)
        .first()
      
      if (!user) {
        return res.status(404).json({ 'error': 'User not found.' })
      }

      await knex('users')
        .where('id', id)
        .del()
      
      return res.send()

    } catch(err) {
      next(err)
    }
  }
}
