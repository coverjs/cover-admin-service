import { applyDecorators, SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from '../constants';
import { ApiBearerAuth } from '@nestjs/swagger';

const SetPublic = (value: boolean) => SetMetadata(IS_PUBLIC_KEY, value);

export const IsPublic = (value: boolean = true) => {
  const decorators = [SetPublic(value)];
  if (value) {
    return applyDecorators(...decorators);
  } else {
    return applyDecorators(...decorators, ApiBearerAuth());
  }
};
