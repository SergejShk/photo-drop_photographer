export type Album = {
  albumId: number;
  date: string;
  location: string;
  name: string;
};

export type Albums = {
  albums: Album[];
};

export type NewAlbum = {
  name: string;
  location: string;
  date: string;
};

export type CurrentAlbum = {
  albumId: string;
  name: string;
  userId: number | null;
  location: string;
  date: string;
  path: string;
};
