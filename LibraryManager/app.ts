import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';

const [mag1, mag2, ...rest] = util.GetAllMagazines();
console.log('test: ', mag1);

const { title: magTitle } = mag1;
console.log(magTitle);

const getMagTitle = ({ title: magTitle}: Magazine) => {
    return magTitle
}
const res = getMagTitle(mag1);
console.log(res)
