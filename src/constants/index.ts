export const AssetsConfig = {
  json: '/json',
  assets: '/assets',
  get cats() {
    return `${this.assets}/cats`;
  },

  get stories() {
    return `${this.json}/stories.json`;
  },
};
