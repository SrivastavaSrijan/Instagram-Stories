export const AssetsConfig = {
  root: '/public',
  get json() {
    return `${this.root}/json`;
  },
  get local_assets() {
    return `/assets`;
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
    return `${this.root}/home`;
  },
};

export const AppConfig = {
  countdown: 5,
};

export const AnimationConfig = {
  onUserClicked: {
    initial: { scale: 0.8, opacity: 0, x: '-50%', y: '-50%' },
    animate: {
      scale: 1,
      opacity: 1,
      x: '-50%',
      y: '-50%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { type: 'tween', duration: 0.2 },
    },
  },
  onUserChange: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
  },
  onStoryChange: {
    initial: { opacity: 0.8 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delay: 0.1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    exit: {
      opacity: 0.8,
      transition: {
        duration: 0.1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  },
};
