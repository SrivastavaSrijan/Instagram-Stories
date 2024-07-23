interface IStory {
  id: string;
  url: string;
}

export interface IUserStory {
  username: string;
  profilePicture: string;
  stories: IStory[];
}
