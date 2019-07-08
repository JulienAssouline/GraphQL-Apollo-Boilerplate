const { Pool } = require('pg')
const squel = require('squel').useFlavour('postgres')
const config = require('../config/default.json')

const userSeeds = [
  {
    fullname: 'Simon Stern',
    email: 'simon@simon.stern',
    password: '123',
  },
  {
    fullname: 'Akshay Manchanda',
    email: 'akshay@akshay.com',
    password: '123',
  },
  {
    fullname: 'Alam Talash',
    email: 'alam@alam.com',
    password: '145',
  }
]

const seed = async () => {
  const pg = await new Pool(config.db).connect()

  try {
    await pg.query('BEGIN')

    console.log('Seeding Users...')

    await Promise.all(
      userSeeds.map(userSeed =>
        pg.query(
          squel
            .insert()
            .into('boilerplate.users')
            .setFields(userSeed)
            .toParam()
        )
      )
    )
    await pg.query('COMMIT')
  } catch (e) {
    await pg.query('ROLLBACK')
    throw e
  } finally {
    pg.release()
  }
}

seed().catch(e => {
  setImmediate(() => {
    throw e
  })
})
