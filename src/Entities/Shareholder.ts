export interface IShareholder {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  share: number;
  isDirector: boolean;
  isCreator: boolean;
};

export const DefaultShareholder: IShareholder = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  share: 0,
  isDirector: false,
  isCreator: false
}
