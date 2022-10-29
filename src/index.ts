import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./Map";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const mapDiv = document.getElementById("map");

const map = new CustomMap(mapDiv, { zoom: 1, center: user.location });
// map.addUserMarker(user);
// map.addCompanyMarker(company);
map.addMarker(user);
map.addMarker(company);
/**
 *
 * parcel is a transpiler/bundler that transpiles typescript code into
 * javascript code for the browser to understand.
 *
 * HOW DOES IT WORK
 * well just like we build javascript with html using the script tag
 * to link the js file to the html file, we can also do same for typescript
 * file and html file; just that the browser won't understand it.
 * to make the browser understand it, we'll need to use parcel and passing the html
 * file to parcel. parcel will then convert the ts file to js file
 */
