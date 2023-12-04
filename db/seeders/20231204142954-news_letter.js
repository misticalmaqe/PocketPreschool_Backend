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
    await queryInterface.bulkInsert('news_letters', [
      {
        title: "N2's Museum Walkabout",
        date_time: '2023-09-4 09:00:00+08',
        description:
          'With the latest exhibition at Singapores National Museume. The children will get to view the state of the art virtual mapping room',
        user_id: 10,
      },
      {
        title: 'K1 zoo outing!',
        description: 'Hold your horses! and sheep?',
        user_id: 1,
      },
    ]);

    await queryInterface.bulkInsert('news_imgs', [
      {
        url: 'https://www.teamlab.art/images/pc-l/9552',
        news_letter_id: 1,
      },
      {
        url: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/history/national-museum-of-singapore-carousel01-rect.jpeg',
        news_letter_id: 1,
      },
      {
        url: 'https://www.appdemostore.com/img/5616030',
        news_letter_id: 2,
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
    await queryInterface.bulkDelete('news_letters');
    await queryInterface.bulkDelete('news_imgs');
  },
};
