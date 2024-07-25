import { PrismaClient } from '@prisma/client';
import { User } from './seed-data';

export const initDatabase = async () => {
  const prisma = new PrismaClient();
  // // 创建用户数据
  await prisma.user.createMany({ data: User });
  // // 创建角色数据
  // await prisma.role.createMany({ data: seedData.Role, skipDuplicates: true });
  // // 创建菜单数据
  // await prisma.user.createMany({ data: seedData.User, skipDuplicates: true });
  // initData()
  //   .then(async () => {
  //     await prisma.$disconnect();
  //   })
  //   .catch(async (e) => {
  //     console.error(e);
  //     await prisma.$disconnect();
  //     process.exit(1);
  //   });
};

initDatabase();
