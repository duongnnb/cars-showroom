import { NewCarInput } from './dto/new-car.input';
import { Repository } from 'typeorm';
import { Car } from './entities/car';
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    getAllCars(): Promise<Car[]>;
    addCar(newCarData: NewCarInput): Promise<Car>;
}
