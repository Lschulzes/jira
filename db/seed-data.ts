interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

interface SeedData {
  entries: Array<SeedEntry>;
}

export const seedData: SeedData = {
  entries: [
    {
      createdAt: Date.now(),
      description: "TODO Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "TODO",
    },
    {
      createdAt: Date.now() - 300000,
      description: "PROGRESS Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "IN_PROGRESS",
    },
    {
      createdAt: Date.now() - 600000,
      description: "TEST Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "IN_TEST",
    },
    {
      createdAt: Date.now() - 1000000,
      description: "COMPLETED Lorem Ipsum Dolores di mec le trab is en el fon",
      status: "COMPLETED",
    },
  ],
};
