import path from 'path';
const solidArray = ['dependency-inversion-principle', 'interface-segregation-principle', 'liskov-substitution-principle'];

require(path.join(__dirname, solidArray[2]));
