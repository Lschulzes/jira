export enum Statuses {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  IN_TEST = "IN_TEST",
  COMPLETED = "COMPLETED",
}

export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: `${Statuses}`;
}
