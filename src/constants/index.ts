export const AssetsConfig = {
  root: '/public',
  get json() {
    return `${this.root}/json`;
  },
  get assets() {
    return `instagram-stories/assets`;
  },
  get local_assets() {
    return `/assets`;
  },
  get cats() {
    return `${this.assets}/cats/`;
  },
  get profiles() {
    return `${this.assets}/profiles/`;
  },
  get stories() {
    return `${this.json}/stories.json`;
  },
  get icons() {
    return `${this.local_assets}/icons`;
  },
  getIcon: function (path: string) {
    return `${this.icons}/${path}.svg`;
  },
};

export const EndpointsConfig = {
  root: '/api',
  get stories() {
    return `${this.root}/stories`;
  },
};

export const AppConfig = {
  countdown: 30,
};
