interface IStory {
  id: string;
  url: string;
}

interface IPost {
  id: string;
  url: string;
  caption: string;
}

export interface IUserData {
  username: string;
  profilePicture: string;
  stories: IStory[];
  posts: IPost[];
}
