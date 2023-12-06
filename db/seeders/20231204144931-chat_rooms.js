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
        users_id: 1,
        children_id: 1,
      },
      {
        users_id: 1,
        children_id: 2,
      },
      {
        users_id: 1,
        children_id: 3,
      },
      {
        users_id: 1,
        children_id: 4,
      },
      {
        users_id: 1,
        children_id: 5,
      },
      {
        users_id: 1,
        children_id: 6,
      },
      {
        users_id: 1,
        children_id: 7,
      },
      {
        users_id: 1,
        children_id: 8,
      },
      {
        users_id: 10,
        children_id: 9,
      },
    ]);

    await queryInterface.bulkInsert('chats', [
      {
        text: 'Hello Baskinroe Daddy!',
        chat_rooms_id: 1,
        is_admin: true,
      },
      {
        text: 'Hello Aziza Mummy!',
        chat_rooms_id: 2,
        is_admin: true,
      },
      {
        text: 'Hello Chester Mummy!',
        chat_rooms_id: 3,
        is_admin: true,
      },
      {
        text: 'Hello Yan Yan Daddy!',
        chat_rooms_id: 4,
        is_admin: true,
      },
      {
        text: 'Hello Adeline Daddy!',
        chat_rooms_id: 5,
        is_admin: true,
      },
      {
        text: 'Hello Bubbles Mummy!',
        chat_rooms_id: 6,
        is_admin: true,
      },
      {
        text: 'Hello Umairah Mummy!',
        chat_rooms_id: 7,
        is_admin: true,
      },
      {
        text: 'Hello Benedict Mummy!',
        chat_rooms_id: 8,
        is_admin: true,
      },
      {
        text: 'Hello Isabella Mummy!',
        chat_rooms_id: 9,
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
    await queryInterface.bulkDelete('chats');
  },
};
