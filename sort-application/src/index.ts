import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -6, -5, 0, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);

const stringCollection = new CharactersCollection('kjfdojewijflsd');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(500).add(-10).add(-3).add(4);
linkedList.print();
linkedList.sort();
linkedList.print();
