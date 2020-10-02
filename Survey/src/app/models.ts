export type Questions = {
 question: Question[]
};

export type Question = {
  type: string,
  label: string,
  required: boolean,
  values: Values[]

};
export type Values = {
  option: string
};
