'use strict';

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
     */
    await queryInterface.bulkInsert('children', [
      {
        user_id: 2,
        full_name: 'Baskinroe Kean',
        grade: 'K1',
        allergies: 'tofu',
        medical_history: 'G6PD',
        DOB: new Date('2018-07-15'),
      },
      {
        user_id: 3,
        full_name: 'Aziza Binte Azizul',
        grade: 'K1',
        DOB: new Date('2018-04-24'),
      },
      {
        user_id: 4,
        full_name: 'Chester Tan',
        grade: 'K1',
        allergies: 'peanut',
        medical_history: 'eczeme',
        DOB: new Date('2018-02-02'),
      },
      {
        user_id: 5,
        full_name: 'Tan Yan Yan',
        grade: 'K1',
        DOB: new Date('2018-12-07'),
      },
      {
        user_id: 6,
        full_name: 'Adeline Low',
        grade: 'K1',
        DOB: new Date('2018-11-18'),
      },
      {
        user_id: 7,
        full_name: 'Bubbles Tan',
        grade: 'K1',
        allergies: 'prawn',
        medical_history: 'thalassaemia',
        DOB: new Date('2018-05-22'),
      },
      {
        user_id: 8,
        full_name: 'Umairah Binte Patel',
        grade: 'K1',
        DOB: new Date('2018-07-10'),
      },
      {
        user_id: 9,
        full_name: 'Kaius Benedict Gonzales',
        grade: 'K1',
        allergies: 'gluten',
        DOB: new Date('2018-10-28'),
      },
      {
        user_id: 7,
        full_name: 'Isabella Ariel Tan',
        grade: 'N2',
        medical_history: 'thalassaemia',
        DOB: new Date('2019-10-05'),
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
    await queryInterface.bulkDelete('children');
  },
};
