import {Product} from "./product";
import { ResponseModule } from "./ResponseModel";

export interface ProductResponseModel extends ResponseModule {
    data:Product[],
}