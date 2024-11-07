import { PrismaClient } from '@prisma/client';
import { User, Role } from './seed-data';

export const initDatabase = async () => {
  const prisma = new PrismaClient();

  // 创建角色数据
  await prisma.role.createMany({ data: Role, skipDuplicates: true });

  // 创建用户数据
  await prisma.user.createMany({ data: User, skipDuplicates: true });
};

initDatabase();
