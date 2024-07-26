import { encryptPassword } from 'uni-nest';

export const User = [
  {
    username: 'admin',
    password: encryptPassword('admin', '1118'),
    salt: '1118',
    nickname: 'hacxy',
    email: 'admin@admin.com',
    roleId: 1
  }
];

export const Role = [
  {
    id: 1,
    name: 'admin',
    description: '管理员'
  }
];
