import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { CarsService } from './cars.service';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<Car[]>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
}
