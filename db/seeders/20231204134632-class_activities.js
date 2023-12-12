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
    await queryInterface.bulkInsert('class_activities', [
      {
        title: 'Zoo Outing!',
        date: '2023-10-20',
        description:
          'From monekys swinging from vine to vine, to the elephants shooting water out from its trunk! This place is zootastic!',
        grade: 'K1',
        users_id: 1,
      },
      {
        title: 'Deepavali Celebration',
        date: '2023-11-10',
        description:
          'Traditional Indian Snacks, putting on henna and dancing to tamil songs!',
        grade: 'K1',
        users_id: 1,
      },
      {
        title: 'Adelines Birthday Party',
        date: '2023-11-20',
        description:
          'The children had so much fun with the game activities, the cake and to end the celebration...PRESENTS!',
        grade: 'K1',
        users_id: 1,
      },
    ]);

    await queryInterface.bulkInsert('class_act_imgs', [
      {
        url: 'https://media.istockphoto.com/id/1214548695/photo/mature-male-white-handed-gibbon-swinging-in-the-trees.jpg?s=612x612&w=0&k=20&c=ld30bEty4ANs3Xc68qqhhp1bDMmopu8dWTGmlLB4NcM=',
        class_activity_id: 1,
      },
      {
        url: 'https://media.istockphoto.com/id/154192102/photo/elephant-splashing-with-water.jpg?s=612x612&w=0&k=20&c=UV7Q_fFhwviPLLa2zQGI9ntFAvnqJJJVgd_A1Rtmo8E=',
        class_activity_id: 1,
      },
      {
        url: 'https://ch-api.healthhub.sg/api/public/content/73f0d359b9ca4f63af8a355e1dea3f87?v=2ac89a49',
        class_activity_id: 2,
      },
      {
        url: 'https://5.imimg.com/data5/FX/UJ/MY-2619450/henna-hand-tattoos.jpg',
        class_activity_id: 2,
      },
      {
        url: 'https://thebakingexplorer.com/wp-content/uploads/2022/04/ChocBirthdayCake2-Copy.webp',
        class_activity_id: 3,
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
    await queryInterface.bulkDelete('class_activities');
    await queryInterface.bulkDelete('class_act_imgs');
  },
};
