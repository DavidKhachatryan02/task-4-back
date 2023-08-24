const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.createMany({
    data: [
      {
        name: "testTest 1",
        email: "test1@test.com",
        firstName: "test1",
        slackUserName: "test1Slack",
        lastName: "test1Lastname",
        gitHubUserName: "test1Git",
        personalEmail: "test1Pemail@test.com",
        dateOfBirth: new Date().toISOString(),
        absences: 10,
        startDate: new Date().toISOString(),
        mobilePhone: "11111",
        isCoreTeamMember: true,
        code: "123123",
        refreshToken: "testUser1refreshToken",
      },
      {
        name: "testTest 2",
        email: "test2@test.com",
        firstName: "test2",
        slackUserName: "test2Slack",
        lastName: "test2Lastname",
        gitHubUserName: "test2Git",
        personalEmail: "test2Pemail@test.com",
        dateOfBirth: new Date().toISOString(),
        absences: 15,
        startDate: new Date().toISOString(),
        mobilePhone: "222222",
        isCoreTeamMember: true,
        code: "122122",
        refreshToken: "testUser2refreshToken",
      },
    ],
  });
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
