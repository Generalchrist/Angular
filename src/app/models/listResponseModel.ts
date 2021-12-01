import { ResponseModule } from "./ResponseModel";

export interface listResponseModel<T> extends ResponseModule{
    data:T[];
}