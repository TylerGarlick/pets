import Monk from 'monk'

const uri = process.env.MONGO_URI
if(!uri)
  throw new Error('URI not defined')

const db = Monk(uri)
const pets = db.get('pets')

const run = async () => {
  const beavis = await pets.findOne({ name: 'Beavis'})

  if(!beavis)
    await pets.insert({ name: 'Beavis', type: 'Dog'})

  const fizzgig = await pets.findOne({ name: 'Fizzgig'})
  if(!fizzgig)
    await pets.insert({ name: 'Fizzgig', type: 'Dog'})

  const results = await pets.find()

  console.log(results)
}


run()
  .catch(console.error)
