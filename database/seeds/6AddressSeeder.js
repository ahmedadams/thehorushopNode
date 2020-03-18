'use strict';
const Database = use('Database');

/*
|--------------------------------------------------------------------------
| AddressSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AddressSeeder {
  async run () {
    try {
      const customer = await Database.raw(`
        INSERT INTO horus.addresses (address, address_2,
        city, country, postcode, address_type, user_id)
        Values("Tryfan close", "56", "London", "UK", "IG45H", "shipping", 1)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const customer = await Database.raw(`
        INSERT INTO horus.addresses (address, address_2,
        city, country, postcode, address_type, user_id)
        Values("Saxon st", "55", "London", "UK", "ER46Y", "billing", 1)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const customer = await Database.raw(`
        INSERT INTO horus.addresses (address, address_2,
        city, country, postcode, address_type, user_id)
        Values("Sunrise", "5", "Manchester", "UK", "IT46H", "shipping", 2)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const customer = await Database.raw(`
        INSERT INTO horus.addresses (address, address_2,
        city, country, postcode, address_type, user_id)
        Values("Moon st", "6", "Manchester", "UK", "E11I7", "billing", 2)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const customer = await Database.raw(`
        INSERT INTO horus.addresses (address, address_2,
        city, country, postcode, address_type, user_id)
        Values("Manor Rd", "69", "Birmingham", "UK", "TY68H", "shipping", 3)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const customer = await Database.raw(`
        INSERT INTO horus.addresses (address, address_2,
        city, country, postcode, address_type, user_id)
        Values("Manor Rd", "69", "Birmingham", "UK", "TY68H", "billing", 3)
        `);

    } catch (error) {
      console.log(error);
    }
      console.log('Added addresses to customers');
  }
}

module.exports = AddressSeeder
