import type { SidebarConfigArray } from '@vuepress/theme-default';

export const devTools: SidebarConfigArray = [
  {
    text: '项目创建',
    children: [
      '/dev-tools/scaffold',
    ]
  },
  {
    text: '轻应用调试',
    children: [
      '/dev-tools/debug',
      '/dev-tools/vconsole',
    ]
  },
  {
    text: '开发工具',
    children: [
      '/dev-tools/app',
    ]
  },
];
