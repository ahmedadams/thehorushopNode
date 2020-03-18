'use strict';
const Database = use('Database');
/*
|--------------------------------------------------------------------------
| TagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TagSeeder {
  async run () {
    try {
      const tag = await Database.raw(`
        INSERT INTO horus.tags (title)
        Values("cool")
        `);
    } catch (error) {
      console.log(error);
    }


    try {
      const tag = await Database.raw(`
        INSERT INTO horus.tags (title)
        Values("hypebeast")
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const tag = await Database.raw(`
        INSERT INTO horus.tags (title)
        Values("new")
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const tag = await Database.raw(`
        INSERT INTO horus.tags (title)
        Values("sale")
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const tag = await Database.raw(`
        INSERT INTO horus.tags (title)
        Values("fresh")
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const tag = await Database.raw(`
        INSERT INTO horus.tags (title)
        Values("light blue")
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const tag = await Database.raw(`
        INSERT INTO horus.tags (title)
        Values("snow white")
        `);
    } catch (error) {
      console.log(error);
    }

    console.log('Added tags to tags table');
  }
}

module.exports = TagSeeder
