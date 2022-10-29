import { faker } from "@faker-js/faker";
import { LocationType } from "../types";
import { Mappable } from "./MapInterface";

export class Company {
  name: string;
  catchPhrase: string;
  location: LocationType;

  public constructor() {
    //
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getLocation(): LocationType {
    return this.location;
  }
}
