import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

@Controller("book")
export class BookControlller{

    @Get("/:id" )
    findBookById(@Param("id", ParseIntPipe) id : number ) : string{
        console.log( id , typeof ("id"));
        
        return "book by id";
    }

}