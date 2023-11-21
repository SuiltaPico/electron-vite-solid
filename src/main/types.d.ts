// 这允许 TypeScript 获取由 Forge 的 Vite 插件自动生成的魔法常量，
// 该插件告诉 Electron 应用程序在哪里查找 Vite 捆绑的应用程序代码（取决于您是在开发中还是在生产中运行）。
declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string
declare const MAIN_WINDOW_VITE_NAME: string
