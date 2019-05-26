# node-rest-api

REST API built with Express and Sequelize

## How to run this example

1. Make sure you've installed

   - `Database` (any DB that is supported by Sequelize)
   - `Git`
   - `Node.js`
   - `npm`
   - `sequelize-cli`

2. Create `.env` file containing your database credentials, you can check the
   template in `.env-template`.

3. Setup commands

   ```bash
   git clone https://github.com/dmtrxw-demos/node-rest-api.git
   cd node-rest-api/
   npm install
   sequelize db:create
   sequelize db:migrate
   ```

4. Running the app

   ```bash
   npm run dev
   ```

That's it! You should see something like this on your Terminal:

```
REST API listening on port 3000
```
