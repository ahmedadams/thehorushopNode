'use strict';
const Database = use('Database');

/*
|--------------------------------------------------------------------------
| RoleUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RoleUserSeeder {
  async run () {
    try {
      const customer = await Database.raw(`
        INSERT INTO horus.role_user (role_id, user_id)
        Values(1,1)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const customer = await Database.raw(`
        INSERT INTO horus.role_user (role_id, user_id)
        Values(1,2)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const customer = await Database.raw(`
        INSERT INTO horus.role_user (role_id, user_id)
        Values(1,3)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const service = await Database.raw(`
        INSERT INTO horus.role_user (role_id, user_id)
        Values(2,4)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const admin = await Database.raw(`
        INSERT INTO horus.role_user (role_id, user_id)
        Values(2,5)
        `);

    } catch (error) {
      console.log(error);
    }
      console.log(`addeds 5 users Roles_User table`);
  }
}

module.exports = RoleUserSeeder
