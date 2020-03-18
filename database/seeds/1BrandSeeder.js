'use strict';
const Database = use('Database');
/*
|--------------------------------------------------------------------------
| BrandSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BrandSeeder {
  async run () {
    try {
      const brand1 = await Database.raw(`
        INSERT INTO horus.brands (title)
        Values("Nike")
        `);
        console.log(`added Nike to brands table`);
    } catch (error) {
      console.log(error);
    }

    try {
      const brand2 = await Database.raw(`
        INSERT INTO horus.brands (title)
        Values("Adidas")
        `);
        console.log(`added Adidas to brands table`);
    } catch (error) {
      console.log(error);
    }

    try {
      const brand3 = await Database.raw(`
        INSERT INTO horus.brands (title)
        Values("Balenciaga")
        `);
        console.log(`added Balenciaga to brands table`);
    } catch (error) {
      console.log(error);
    }

    try {
      const brand4 = await Database.raw(`
        INSERT INTO horus.brands (title)
        Values("Puma")
        `);
        console.log(`added Puma to brands table`);
    } catch (error) {
      console.log(error);
    }

    try {
      const brand5 = await Database.raw(`
        INSERT INTO horus.brands (title)
        Values("Prada")
        `);
        console.log(`added Prada to brands table`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BrandSeeder
