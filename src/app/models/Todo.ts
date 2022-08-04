export interface Todo {
  _id: number;
  name: string;
  isDone: boolean;
  isEditing: boolean;
}

export interface QueryParams {
  [_id: string]: number;
}
