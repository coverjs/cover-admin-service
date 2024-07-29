import { PartialType } from '@nestjs/mapped-types';
import { SearchQuery } from '@/common/dto';

export class QueryRoleDto extends PartialType(SearchQuery) {}