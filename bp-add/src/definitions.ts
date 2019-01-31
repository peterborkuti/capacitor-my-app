declare global {
  interface PluginRegistry {
    AddPlugin?: AddPluginPlugin;
  }
}

export interface AddPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
