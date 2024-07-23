interface IStory {
  id: string;
  url: string;
}

export interface IUserProfile {
  username: string;
  profilePicture: string;
  stories: IStory[];
}
