const hasAGoalToday = true;

let currentId = 1;
const ID = () => currentId++;

export const goalOfTheDay = {
  id: ID(),
  titleKey: "TEST_A_SPORT",
};

const users = [
  {
    id: ID(),
    firstName: "Michel",
    lastName: "Dupont",
  },
  {
    id: ID(),
    firstName: "Jacqueline",
    lastName: "Ruiz",
  },
  {
    id: ID(),
    firstName: "Pumba",
    lastName: "Sanglier",
  },
];

export const currentUser = users[0];

export const userGoalHistory = [
  {
    userId: currentUser.id,
    goalId: goalOfTheDay.id,
    enableAt: new Date(),
  },
];

export const timeline = [
  {
    id: ID(),
    author: users[1],
    content: "Hey trop cool cette run. Reboosté !",
    medias: ["https://picsum.photos/200/300"],
    likeCount: 0,
    createdAt: new Date(),
    comments: [
      {
        id: ID(),
        author: users[2],
        content: "Nice. Continue comme ça chef !",
        medias: [],
        likeCount: 0,
        createdAt: new Date(),
        comments: [],
      },
    ],
  },
  {
    author: users[2],
    content: "On continue",
    medias: [],
    createdAt: new Date(),
    comments: [],
  },
];

export const findUserGoalOfTheDay = () => (hasAGoalToday ? goalOfTheDay : null);
