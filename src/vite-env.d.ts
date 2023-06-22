declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
  interface ComponentCustomProperties {
    $filters: any;
  }
}
declare function $t(key: string, params?: any): string;
declare module "*.PNG";
declare module "*.GIF";
