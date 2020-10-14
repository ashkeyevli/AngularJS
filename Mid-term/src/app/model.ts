export interface IUser {
  access_token: string;
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  geo: IGeo;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IGeo {
  lat: string;
  lng: string;
}
export interface ICompany {
  name: string;
  cathPhrase: string;
  bs: string;
}


export interface IPosts {
  PostId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}
export interface IPhoto{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

