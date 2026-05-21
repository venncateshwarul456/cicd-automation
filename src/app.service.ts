import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'vivaan Technologies pvt ltd!';
  }
}
