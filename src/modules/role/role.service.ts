import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  create(createRoleDto: CreateRoleDto) {
    console.log(createRoleDto);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
