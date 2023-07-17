declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
  interface ComponentCustomProperties {
    $filters: any;
  }
}
// declare function $t(key: string, params?: any): string;
declare module "lodash";
declare module "i18n";
declare module "*.PNG";
declare module "*.GIF";
declare module "gsap";

declare interface ResponseInterface {
  data: any[];
}

declare type LangVariantType = {
  en: string;
  zh: string;
};

declare type JobTagType = {
  id: string;
  type: string;
  label: LangVariantType;
};

declare type JobType = {
  id: string;
  date: string[];
  title: LangVariantType;
  company: LangVariantType;
  tags: JobTagType[];
  description: LangVariantType;
  tools: string;
  more?: any;
};

declare type ProjectType = {
  id: string;
  url: string;
  img: string;
  title: LangVariantType;
};
