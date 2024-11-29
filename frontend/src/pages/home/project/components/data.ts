export interface ProjectGroup {
  id: string;
  name: string;
  description: string;
  type: string;
  updatedAt: string;
}

export const projectGroups: ProjectGroup[] = [
  {
    id: '1',
    name: 'blog dashboard',
    type: 'nestjs',
    description: '博客后台',
    updatedAt: '2024-03-20',
  },
  {
    id: '2',
    name: 'social platform',
    type: 'nestjs',
    description: '社交平台',
    updatedAt: '2024-03-19',
  },
  {
    id: '3',
    name: 'staging',
    type: 'nestjs',
    description: '测试环境',
    updatedAt: '2024-03-18',
  },
];
