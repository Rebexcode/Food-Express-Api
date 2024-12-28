import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { UserRole } from 'src/users/user.entity';

export const Roles = (...roles: UserRole[]) => {
  return createParamDecorator(
    (data: unknown, ctx: ExecutionContext): UserRole[] => {
      const request = ctx.switchToHttp().getRequest();
      const user = request.user;

      if (!user || !roles.includes(user.role)) {
        throw new ForbiddenException('Insufficient privileges');
      }

      return user.roles;
    },
  );
};
