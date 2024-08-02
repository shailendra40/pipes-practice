import { Module } from '@nestjs/common';
import { BookControlller } from './book.controller';

@Module({
  imports: [],
  controllers: [BookControlller],
  providers: [],
})
export class BookModule {}
