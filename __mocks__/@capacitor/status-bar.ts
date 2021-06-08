export enum Style {
  Dark = 'DARK',
  Light = 'LIGHT',
  Default = 'DEFAULT'
}

class Mock {
  async setStyle(opt: { style: Style }): Promise<void> {}
  async setBackgroundColor(opt?: any): Promise<void> {}
  async hide(opt?: any): Promise<void> {}
  async show(opt?: any): Promise<void> {}
  async setOverlaysWebView(opt?: any): Promise<void> {}
  async getInfo(opt?: any): Promise<any> {
    return {
      visible: true,
      style: 'DARK',
      color: '#FF0000',
      overlays: false
    };
  }
}

const StatusBar = new Mock();

export { StatusBar };
