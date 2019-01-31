import { WebPlugin } from '@capacitor/core';
import { AddPluginPlugin } from './definitions';

export class AddPluginWeb extends WebPlugin implements AddPluginPlugin {
  constructor() {
    super({
      name: 'AddPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const AddPlugin = new AddPluginWeb();

export { AddPlugin };
