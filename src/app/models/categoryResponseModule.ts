import { Category } from "./category";
import { ResponseModule } from "./ResponseModel";

export interface CategoryResponseModule extends ResponseModule{
    data:Category[];
}