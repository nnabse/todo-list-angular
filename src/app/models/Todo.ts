export interface Todo {
  _id: number;
  name: string;
  isDone: boolean;
  isEditing: boolean;
}

export interface Params {
  [_id: string]: number;
}
