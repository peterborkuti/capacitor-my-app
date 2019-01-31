declare global {
  interface PluginRegistry {
    AddPlugin?: AddPluginPlugin;
  }
}

export interface AddPluginPlugin {
  add(options: { a: number, b: number }): Promise<{value: number}>;
}
