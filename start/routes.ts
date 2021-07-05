/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/health', async ({ response }) => {
  const isLive = await HealthCheck.isLive()
  // TODO
  // if Key, return report
  //const report = await HealthCheck.getReport()
  //return isLive ? response.status(200).send(report) : response.status(500).send(report)
  return isLive
    ? response.status(200).send({ health: isLive })
    : response.status(500).send({ health: isLive })
})
