import { Injectable, NestMiddleware } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: any, res: any, next: any) {
    try {
      const token = req.headers.authorization?.split(' ')[1];

      if (token) {
        const payload = await this.jwtService.verifyAsync(token);

        req.user = payload;
      }

      next();
    } catch {
      next();
    }
  }
}
