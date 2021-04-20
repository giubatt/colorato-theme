// interface Shoe {
//   size: number;
//   name: string;
// }
interface Shoe {
  size: number;
  name: string;
}

interface Food {
  type: 'fruit' | 'vegetable';
  name: string;
}

function generateSome<T>(howMany: number): T {
  return {
    size: 10,
    name: 'wes',
  };
}

const unusedVariable;

export default async function unreachableCode() {
  return 10;
}

const myShoe = generateSome<Shoe>(10);

const banana: Food = {
  type: 'fruit',
  name: 'Banana',
};

const render = ({ type, name }: Food) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{type}</h1>
      </header>
    </div>
  );
}

render(banana)
