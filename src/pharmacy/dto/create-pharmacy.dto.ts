import { IsDate, IsNotEmpty, IsString, MaxLength,  } from "class-validator";

export class CreatePharmacyDto {
  @MaxLength(80)
  @IsString()
  @IsNotEmpty()
  soon: string;

  @MaxLength(80)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(18)
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  opening_hours: Date;

  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  accountable: string;

  @MaxLength(11)
  @IsString()
  @IsNotEmpty()
  telephone: string;

  @MaxLength(55)
  @IsString()
  @IsNotEmpty()
  other: string;
}
