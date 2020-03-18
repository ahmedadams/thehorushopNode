'use strict';
const Database = use('Database');

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TypeSeeder {
  async run () {
    //Nike trainers
    try {
      const lebrons = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Lebron James", "Live like a king in a fresh pair of Nike LeBrons")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const kobe = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Kobe Byran", " Have the MAMBA mentality with fresh pair of Nike Kobe")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const airforce1 = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Air Force1", "The Nike Air Force 1 is the definition of classic. From Uptown to Downtown, and everything in between.")
        `);

    } catch (error) {
      console.log(error);
    }
//Adidas trainers
    try {
      const yeezy = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Adidas Yeezy", "Nothing generates hype quite like the Kanye West brainchild, the Adidas Yeezy")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const nmd = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Adidas NMD", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const beyonceIvyPark = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Beyonce Ivy Park", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }
    //Balenciaga trainers
    try {
      const balenciagaTripleS = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Balenciaga Triple S", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const balenciagaSpeed = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Balenciaga Speed Trainer", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const balenciagaArena = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Balenciaga Arena High", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }
  //Puma trainerss
    try {
      const rihannaCleatedCreeper = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Puma Cleated Creeper Rihanna", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const chelseaSneakerBoot = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Puma Chelsea Sneaker Boot", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const clydeCourtDisrupt = await Database.raw(`
        INSERT INTO horus.types (title, description)
        Values("Puma Clyde Court Disrupt", "New edition, don't miss out")
        `);

    } catch (error) {
      console.log(error);
    }
  //Prada trainers
  try {
    const neopreneBlack = await Database.raw(`
      INSERT INTO horus.types (title, description)
      Values("Prada Neoprene", "New edition, don't miss out")
      `);

  } catch (error) {
    console.log(error);
  }

  try {
    const cloudBurstThunder = await Database.raw(`
      INSERT INTO horus.types (title, description)
      Values("Prada Cloud Burst Thunder", "New edition, don't miss out")
      `);

  } catch (error) {
    console.log(error);
  }

  try {
    const pradaMechanoLeather = await Database.raw(`
      INSERT INTO horus.types (title, description)
      Values("Prada Mechano Leather", "New edition, don't miss out")
      `);

  } catch (error) {
    console.log(error);
  }
    console.log('Added type to types database table');

  }
}

module.exports = TypeSeeder
