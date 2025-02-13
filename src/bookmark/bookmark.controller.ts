import { Controller, Get } from "@nestjs/common";


@Controller('controller')
export class BookmarkController {
  @Get('test')
  test() {
    console.log('test');
    return 'test';
  }
}