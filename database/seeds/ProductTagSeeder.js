'use strict';
const Database = use('Database');

/*
|--------------------------------------------------------------------------
| ProductTagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductTagSeeder {
  async run () {
    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(1,2)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(1,4)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(2,5)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(2,2)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(2,3)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(3,2)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(3,1)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(4,4)
        `);
    } catch (error) {
      console.log(error);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(4,2)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(5,2)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(5,5)
        `);
    } catch (error) {
      console.log(error);
    }

    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(6,2)
        `);
    } catch (error) {
      console.log(error);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO horus.product_tag (product_id, tag_id)
        Values(6,6)
        `);
    } catch (error) {
      console.log(error);
    }
    console.log('Added tags and products to Product_Tag table');
  }
}

module.exports = ProductTagSeeder
