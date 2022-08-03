export interface Todo {
  _id: number;
  name: string;
  isDone: boolean;
  isEditing: boolean;
}

export interface DeleteResponse {
  acknowledged: boolean;
  deletedCount: number;
}

export interface UpdateResponse {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId?: null;
  upsertedCount: number;
  matchedCount: number;
}
