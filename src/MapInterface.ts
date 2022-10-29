import { LocationType } from "../types";

export interface Mappable {
  getLocation(): LocationType;
}
