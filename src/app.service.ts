import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Vivaan Technologies pvt ltd since 2026!';
  }
}
