import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/role.dto';
import { QueryRoleDto } from './dto/role.query.dto';
import { SetPermissionsDto } from './dto/role.permisssions.dto';
import { PrismaService } from '@/common/prisma/prisma.service';
import { BusinessException } from '../../common/exceptions/business.exceptions';

@Injectable()
export class RoleService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createRoleDto: CreateRoleDto) {
    const { name } = createRoleDto;
    const user = await this.prismaService.role.findUnique({
      where: {
        name
      }
    });
    user && BusinessException.throwCommonIncorrect('角色名称已存在');
    try {
      await this.prismaService.role.create({
        data: createRoleDto
      });
    } catch (error) {
      new BadRequestException(error);
    }
    return null;
  }

  async findAll(query: QueryRoleDto) {
    // 基于偏移分页
    let results = null;
    try {
      const { pageNum, pageSize } = query;
      const skip = (pageNum - 1) * pageSize;
      const take = +pageSize;
      results = await this.prismaService.role.findMany({
        skip,
        take
      });
    } catch (error) {
      console.log(error, 'error');
      new BadRequestException(error);
    }
    return results;
  }

  async findOne(id: number) {
    !id && BusinessException.throwCommonIncorrect('角色ID不能为空');
    let user = null;
    try {
      user = await this.prismaService.role.findUnique({
        where: {
          id
        }
      });
    } catch (error) {
      console.log(error, 'error');
      new BadRequestException(error);
    }

    return user;
  }

  async remove(id: number) {
    !id && BusinessException.throwCommonIncorrect('角色ID不能为空');
    try {
      await this.prismaService.role.delete({
        where: {
          id
        }
      });
    } catch (error) {
      console.log(error, 'error');
    }
    return '删除成功';
  }
  async setPermissions(setPermissionsDto: SetPermissionsDto) {
    console.log(setPermissionsDto,'setPermissionsDto');
    const { roleId, permissionIds } = setPermissionsDto;
    !roleId && BusinessException.throwCommonIncorrect('角色id不能为空');
    const role = await this.prismaService.role.findUnique({
      where: {
        id: roleId
      }
    });
    !role && BusinessException.throwCommonIncorrect('角色不存在');
    const permissions = await this.prismaService.permission.findMany({
      where: {
        id: { in: permissionIds }
      }
    });
    // !permissions?.length &&  throw new BadRequestException('未查询到权限');
    !permissions?.length &&  BusinessException.throwCommonIncorrect('未查询到权限');
    await this.prismaService.role.update({
      where: { id: roleId },
      data: {
        permissions: {
          createMany: {
            data: permissions.map((permission) => {
              return {
                permissionId: permission.id,
                roleId: roleId
              };
            })
          }
        }
      }
    });

    return null;
  }
}
