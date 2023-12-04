'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * email:
      password:
      full_name:
      phone_number:
      is_admin:
      display_photo:
    */
    await queryInterface.bulkInsert('users', [
      {
        email: 'teacher1@pocket.com',
        password:
          '$2b$10$APx710ndxmeCrXhsKSxHS.APZZmWvFhC0STTkPgGlWuruf9Q95L6e',
        full_name: 'Josephine Teo',
        phone_number: 88889999,
        is_admin: true,
        display_photo: null,
      },
      {
        email: 'parent1@pocket.com',
        password:
          '$2b$10$Lr3ddXXQlUkvTQooW8CNYe1GsrehQdPRx35hStgYP7ud8iiMjAc22',
        full_name: 'Robby Kean',
        phone_number: 88888888,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'parent2@pocket.com',
        password:
          '$2b$10$BIuL10fjEyh9CWyl7sRCbOfHOZ1pd1vd1aU.6luSjX3AO2mCBwoOu',
        full_name: 'Nur Azis',
        phone_number: 88888880,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'parent3@pocket.com',
        password:
          '$2b$10$0N3V3uQv59IlQ.11xKSstuTMSzRV6tVN0irCjHvVZV7NVVtWRGK3y',
        full_name: 'Alice Chin How',
        phone_number: 88888881,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'parent4@pocket.com',
        password:
          '$2b$10$F/F4//GjxgKNTHMGp.Zquev76tXGQlxVQPP6cbZlSKRn858/OA2rq',
        full_name: 'Francis Tan Kin',
        phone_number: 88888882,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'parent5@pocket.com',
        password:
          '$2b$10$pseterbqset3YU2SOvM7neFeIJoxsHruysRPOom7Fb1EmQaFx6pTO',
        full_name: 'Low Kuan Hap Kee',
        phone_number: 88888883,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'parent6@pocket.com',
        password:
          '$2b$10$3no3SnKytPfp8nXBuD/HS.51vfJuziGq9OXqkwNAX7OKLCGR9wP1S',
        full_name: 'Julie Anne Dorasamy',
        phone_number: 88888884,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'parent7@pocket.com',
        password:
          '$2b$10$o6TISSkitmGp6ivoGQxPourDezs.0NH..JalpWYuo109SK/o/.cLm',
        full_name: 'Hazika Nur Hailee',
        phone_number: 88888885,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'parent8@pocket.com',
        password:
          '$2b$10$IJIskdepU5ZZUwwEl/PvHesZlOplrr5ajyqxu9ZwTYLA/qCgks2Le',
        full_name: 'Ester Gabriella',
        phone_number: 88888886,
        is_admin: false,
        display_photo: null,
      },
      {
        email: 'teacher2@pocket.com',
        password:
          '$2b$10$anHv47peRjypP1U9DAccaeLaKmZ.V0U.vFf3ktbqVhoH9iYN/gNNC',
        full_name: 'Lee Hong Mei',
        phone_number: 99998888,
        is_admin: true,
        display_photo: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users');
  },
};
