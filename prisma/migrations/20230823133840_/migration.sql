-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "slackUserName" TEXT NOT NULL,
    "gitHubUserName" TEXT NOT NULL,
    "personalEmail" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "absences" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "mobilePhone" TEXT NOT NULL,
    "isCoreTeamMember" BOOLEAN NOT NULL,
    "code" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
