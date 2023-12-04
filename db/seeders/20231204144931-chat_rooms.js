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
    await queryInterface.bulkInsert('chat_rooms', [
      {
        user_id: 1,
        child_id: 1,
      },
      {
        user_id: 1,
        child_id: 2,
      },
      {
        user_id: 1,
        child_id: 3,
      },
      {
        user_id: 1,
        child_id: 4,
      },
      {
        user_id: 1,
        child_id: 5,
      },
      {
        user_id: 1,
        child_id: 6,
      },
      {
        user_id: 1,
        child_id: 7,
      },
      {
        user_id: 1,
        child_id: 8,
      },
      {
        user_id: 10,
        child_id: 9,
      },
    ]);

    await queryInterface.bulkInsert('chat', [
      {
        text: 'Hello Baskinroe Daddy!',
        chat_room_id: 1,
        is_admin: true,
      },
      {
        text: 'Hello Aziza Mummy!',
        chat_room_id: 2,
        is_admin: true,
      },
      {
        text: 'Hello Chester Mummy!',
        chat_room_id: 3,
        is_admin: true,
      },
      {
        text: 'Hello Yan Yan Daddy!',
        chat_room_id: 4,
        is_admin: true,
      },
      {
        text: 'Hello Adeline Daddy!',
        chat_room_id: 5,
        is_admin: true,
      },
      {
        text: 'Hello Bubbles Mummy!',
        chat_room_id: 6,
        is_admin: true,
      },
      {
        text: 'Hello Umairah Mummy!',
        chat_room_id: 7,
        is_admin: true,
      },
      {
        text: 'Hello Benedict Mummy!',
        chat_room_id: 8,
        is_admin: true,
      },
      {
        text: 'Hello Isabella Mummy!',
        chat_room_id: 9,
        is_admin: true,
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
    await queryInterface.bulkDelete('chat_rooms');
    await queryInterface.bulkDelete('chat');
  },
};
