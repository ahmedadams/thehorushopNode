'use strict';
const Database = use('Database');

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductSeeder {
  async run () {
    try {
      const lebrons = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("L16L-SFRI", "Lebron 16 Low", "Its Drip or Drown season so grab the
        new Lebron 16 Low Atmos Safari. This LBJ 16 sports an orange upper with grey
         and black accents, orange Nike “Swoosh”, black Nike ‘Swoosh”, white midsole,
          and a gum sole. These sneakers released March 2019 and retailed for $175.",
          "/img/products/nike-lebron-16-safari", "orange", 250, 99, "Suede", 1, 1, 5)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const kobe = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("MBRG-GRN", "Nike Mamba Rage Grinch", "Nike and the LA-based
        streetwear and sneaker one-stop shop Undefeated have been long time
        collaborators, so it only made sense for one LA legend to honor another
        with a special edition Kobe 4 for this years Mamba Day.",
          "/img/products/nike-kobe-mamba-green", "green", 200, 95, "fly-knit", 1, 2, 5)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const airforce1 = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("AF1L-TSCJ", "Air Force 1 Low Travis Scott Cactus Jack", "Travis Scott and Nike add a new design to their
        growing Air Force arsenal with the Air Force 1 Low Travis Scott Cactus Jack",
          "/img/products/nike-airforce1-traviscott", "insignias", 200, 95, "wool", 1, 3, 5)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const yeezy = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("YZB700V3-AZL", "adidas Yeezy 700 V3 Azael", "This 700 features a white upper
        with suede overlays and orange accents on the midsole. Its chunky midsole is inspired
        by the Adidas KB3 atop a gum outsole completes the design. ",
          "/img/products/adidas-yeezy-700-v3", " AZAEL", 500, 45, "Suede", 2, 4, 5)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const beyonceIvyPark = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("NTJG-BIP", "adidas Nite Jogger Beyonce Ivy Park", "The Nite Jogger entered the running scene in the
        '80s with a revolutionary design. Building on the legendary history,
        adidas x IVY PARK reimagine the iconic shoe in a burst of maroon and
        solar orange.","/img/products/addidas-ivypark-orange", "orange", 150, 99,
         "wool", 2, 6, 5)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const balenciaga = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("TRPS-CSBK", "Balenciaga Triple S Clear Sole Black", "Calfskin,
        lambskin and mesh, Complex 3-layered outsole, Clear Sole technology,
         TPU injected inside the sole creating an air bubble for more comfort,
         a lighter shoe and a shock absorber effect","/img/products/balenciaga-tripleS-black",
         "black", 700, 57, "Polyester", 3, 7, 5)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const puma = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("PM-CCRFSG-W", "Puma Cleated Creeper Rihanna Fenty Suede Green",
        "Most likely to break the rules, Rihanna returns as PUMA Creative Director
         for her third season. The latest FENTY PUMA by Rihanna collection takes classic
          school uniforms and dismantles them. Varsity jackets are reimagined with exaggerated
           dimensions. Sneakers meet stiletto heels. Preppy meets provocative. Unexpected
           cutlines, premium materials, and chenille patches abound.",
           "/img/products/Puma-Cleated-Rihanna-Green", "green", 100, 25, "suede", 4, 10, 5)
        `);

    } catch (error) {
      console.log(error);
    }

    try {
      const prada = await Database.raw(`
        INSERT INTO horus.products (sku, title, description, image_url, color,
          price, qty, material, brand_id, type_id, user_id)
        Values("PD-PRPCTKWH", "Prada Cloudbust Thunder Knit White", "The new Cloudbust
         Thunder sneakers, an evolution of the previous style towards a more complex
         and sculptural design, are characterized by the 3D eyestay and voluminous
         light rubber sole.", "/img/products/Prada-Cloudbust-White", "white", 1000, 11, "Leather", 5, 14, 5)
        `);

    } catch (error) {
      console.log(error);
    }
    console.log('Added products to products table');
  }
}

module.exports = ProductSeeder
