import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    thumbnail: string;

    @MaxLength(30)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: Number;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    makings: string;

    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    availability: string;

    @MaxLength(20)
    @IsString()
    @IsNotEmpty()
    volume: string;

    @MaxLength(55)
    @IsString()
    @IsNotEmpty()
    other: string;
}
