import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/role.dto';
import { QueryRoleDto } from './dto/role.query.dto';
import { PrismaClient } from '@prisma/client';
import { BusinessException } from '../../common/exceptions/business.exceptions';

@Injectable()
export class RoleService {
  constructor(private readonly prismaClient: PrismaClient) {}
  async create(createRoleDto: CreateRoleDto) {
    const { name } = createRoleDto;
    const user = await this.prismaClient.role.findUnique({
      where: {
        name
      }
    });
    user && BusinessException.throwCommonIncorrect('角色名称已存在');
    await this.prismaClient.role.create({
      data: createRoleDto
    })
    return null;
  }

  async findAll(query: QueryRoleDto) {
    // 基于偏移分页
    const { pageNum, pageSize } = query;
    const skip = (pageNum - 1) * pageSize;
    const take = pageSize;
    const results = await this.prismaClient.role.findMany({
      skip,
      take,
      orderBy: {
        createdAt: 'asc'
      }
    });
    return results;
  }

  async findOne(id: number) {
    !id && BusinessException.throwCommonIncorrect('角色ID不能为空');
    const user = await this.prismaClient.role.findUnique({
      where: {
        id
      }
    });
    return user
  }

  async remove(id: number) {
    !id && BusinessException.throwCommonIncorrect('角色ID不能为空');
    await this.prismaClient.role.delete({
      where: {
        id
      }
    });
    return null
  }
}
