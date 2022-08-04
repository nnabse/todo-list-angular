export interface Todo {
  _id: number;
  name: string;
  isDone: boolean;
  isEditing: boolean;
}

export interface Params {
  [p: string]:
    | string
    | number
    | boolean
    | readonly (string | number | boolean)[];
}
