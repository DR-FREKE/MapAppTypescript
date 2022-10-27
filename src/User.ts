import { LocationType } from "../types";
import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: LocationType;

  public constructor() {
    //
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
