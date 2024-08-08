import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements NestInterceptor {
  private readonly API_KEY = process.env.API_KEY;

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['api-key'];

    if (apiKey !== this.API_KEY) {
      throw new UnauthorizedException('Invalid API key');
    }

    return next.handle();
  }
}
