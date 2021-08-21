import type { ComponentRenderProxy, VNode, ComponentPublicInstance, FunctionalComponent, PropType as VuePropType } from 'vue';

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };
  declare interface Window {
    // Global vue app instance
    __APP__: App<Element>;
    __POWERED_BY_QIANKUN__?: string;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  }

  // vue
  declare type PropType<T> = VuePropType<T>;

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  declare type Nullable<T> = T | null;
  declare type NonNullable<T> = T extends null | undefined ? never : T;
  declare type Recordable<T = any> = Record<string, T>;
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  declare type Indexable<T = any> = {
    [key: string]: T;
  };
  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  declare type TimeoutHandle = ReturnType<typeof setTimeout>;
  declare type IntervalHandle = ReturnType<typeof setInterval>;

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  declare interface WheelEvent {
    path?: EventTarget[];
  }
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VUE_APP_PORT: number;
    VUE_APP_USE_MOCK: boolean;
    VUE_APP_USE_PWA: boolean;
    VUE_APP_PUBLIC_PATH: string;
    VUE_APP_GLOB_APP_TITLE: string;
    VUE_APP_GLOB_APP_SHORT_NAME: string;
    VUE_APP_USE_CDN: boolean;
    VUE_APP_DROP_CONSOLE: boolean;
    VUE_APP_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VUE_APP_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VUE_APP_LEGACY: boolean;
    VUE_APP_USE_IMAGEMIN: boolean;
    VUE_APP_GENERATE_UI: string;
  }

  declare interface MockMethod {
    url: string;
    method?: MethodType;
    timeout?: number;
    statusCode?: number;
    response?: ((opt: { body: Recordable; query: Recordable; headers: Recordable }) => any) | any;
    rawResponse?: (req: IncomingMessage, res: ServerResponse) => void;
  }

  declare interface BasicOption {
    label: string;
    value: any;
    [key: string]: any;
  }

  declare interface BasicMap<T> {
    [key: string]: T;
  }

  declare type BasicOptions = Array<BasicOption>;
  declare function parseInt(s: string | number, radix?: number): number;

  declare function parseFloat(string: string | number): number;

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
  declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
}

declare module 'vue' {
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>;
}
