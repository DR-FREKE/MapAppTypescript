import { Company } from "./Company";
import { User } from "./User";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);
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
