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
        users_id: 2,
        full_name: 'Baskinroe Kean',
        grade: 'K1',
        allergies: 'tofu',
        medical_history: 'G6PD',
        date_of_birth: new Date('2018-07-15'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fboy.jpg?alt=media&token=32456136-aead-4a88-bd82-b19aee688da3',
      },
      {
        users_id: 3,
        full_name: 'Aziza Binte Azizul',
        grade: 'K1',
        date_of_birth: new Date('2018-04-24'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fgirl.jpg?alt=media&token=80194d5d-296a-48d4-a152-a812cbd57099',
      },
      {
        users_id: 4,
        full_name: 'Chester Tan',
        grade: 'K1',
        allergies: 'peanut',
        medical_history: 'eczeme',
        date_of_birth: new Date('2018-02-02'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fboy.jpg?alt=media&token=32456136-aead-4a88-bd82-b19aee688da3',
      },
      {
        users_id: 5,
        full_name: 'Tan Yan Yan',
        grade: 'K1',
        date_of_birth: new Date('2018-12-07'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fgirl.jpg?alt=media&token=80194d5d-296a-48d4-a152-a812cbd57099',
      },
      {
        users_id: 6,
        full_name: 'Adeline Low',
        grade: 'K1',
        date_of_birth: new Date('2018-11-18'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fgirl.jpg?alt=media&token=80194d5d-296a-48d4-a152-a812cbd57099',
      },
      {
        users_id: 7,
        full_name: 'Bubbles Tan',
        grade: 'K1',
        allergies: 'prawn',
        medical_history: 'thalassaemia',
        date_of_birth: new Date('2018-05-22'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fgirl.jpg?alt=media&token=80194d5d-296a-48d4-a152-a812cbd57099',
      },
      {
        users_id: 8,
        full_name: 'Umairah Binte Patel',
        grade: 'K1',
        date_of_birth: new Date('2018-07-10'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fgirl.jpg?alt=media&token=80194d5d-296a-48d4-a152-a812cbd57099',
      },
      {
        users_id: 9,
        full_name: 'Kaius Benedict Gonzales',
        grade: 'K1',
        allergies: 'gluten',
        date_of_birth: new Date('2018-10-28'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fboy.jpg?alt=media&token=32456136-aead-4a88-bd82-b19aee688da3',
      },
      {
        users_id: 7,
        full_name: 'Isabella Ariel Tan',
        grade: 'N2',
        medical_history: 'thalassaemia',
        date_of_birth: new Date('2019-10-05'),
        display_photo:
          'https://firebasestorage.googleapis.com/v0/b/pocket-preschool.appspot.com/o/studentdp%2Fgirl.jpg?alt=media&token=80194d5d-296a-48d4-a152-a812cbd57099',
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
