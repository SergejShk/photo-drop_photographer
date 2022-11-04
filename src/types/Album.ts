export type Album = {
  albumId: number;
  date: string;
  location: string;
  name: string;
};

export type Albums = {
  albums: Album[];
};

export type AlbumsStore = {
  albums: Albums | {}[];
};

export type NewAlbum = {
  name: string;
  location: string;
  date: string;
};

export type UpdatedNewAlbum = {
  albumId: string;
  name: string;
  userId: number | null;
  location: string;
  date: string;
  path: string;
};

export type CurrentAlbum = {
  albumId: string;
  name: string;
  location: string;
  date: string;
  photos: {}[];
};
