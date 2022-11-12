export interface ComponentActionOption {
  module: string;
  lazy: boolean;
  style: boolean;
  test: boolean;
  story: boolean;
}

export interface HookActionOption {
  module: string;
}

export interface PageActionOptions {
  story: boolean;
}
