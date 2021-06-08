class Mock {
  async hide(opt?: {fadeOutDuration: number}): Promise<void> {}
  async show(opt?: {
    autoHide: boolean,
    fadeInDuration: number,
    fadeOutDuration: number,
    showDuration: number,
  }): Promise<void> {}
}

const SplashScreen = new Mock();

export { SplashScreen };
