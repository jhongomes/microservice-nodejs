import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { Pharmacy } from './entities/pharmacy.entity';

@Injectable()
export class PharmacyService {
  constructor(
    @InjectRepository(Pharmacy)
    private pharmacyRepository: Repository<Pharmacy>,
  ) {}

  create(createPharmacyDto: CreatePharmacyDto) {
    const pharmacy = this.pharmacyRepository.create(createPharmacyDto);
    return this.pharmacyRepository.save(pharmacy);
  }

  findAll() {
    return this.pharmacyRepository.find();
  }

  findOne(id: string) {
    return this.pharmacyRepository.findOne(id);
  }

  async update(id: string, updatePharmacyDto: UpdatePharmacyDto) {
    const updateResponse = await this.pharmacyRepository.update(
      id,
      updatePharmacyDto,
    );

    if (!updateResponse.affected) {
      throw new EntityNotFoundError(Pharmacy, id);
    }

    return this.pharmacyRepository.findOne(id);
  }

  async remove(id: string) {
    const deleteResult = await this.pharmacyRepository.delete(id);

    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Pharmacy, id);
    }
  }
}
