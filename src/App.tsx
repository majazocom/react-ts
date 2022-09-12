import './App.css';
import AnimalList from './components/AnimalList';
import { Animal } from './models/animal';

// function printName(name: string) {
//   console.log(name);
// }
// printName(animal.name);

// let printDoubleAge: (age:number) => number

// 2a Gör en ny komponent - eller ändra befintlig - så att den visar en lista med djur-objekt. Gör minst 4 stycken. Varje djur ska ha egenskaperna "name" och "species". Använd ett interface i en separat fil för att beskriva djur-objekt. Interfacet ska ligga i en separat mapp i "src" med namnet "models".

let animals: Animal[] = [
  {
    name: "Eeyor",
    specie: "Donkey"
  },
  {
    name: "Tigger",
    specie: "Tiger"
  },
  {
    name: "Piglet",
    specie: "Pig"
  },
  {
    name: "Winnie The Pooh",
    specie: "Bear"
  }
]

// 2b Flytta ut koden som renderar varje djur i listan till en egen komponent, i en annan fil. Använd interface för att beskriva props.

// 2c Låt användaren klicka på en knapp på ett djur, för att flytta det högst upp i listan. Du behöver använda tekniken "lifting state up" som du ser i presentationen.
// 2d* Knappen ska förstås bara vara synlig om det går att flytta djuret högre. Lägg till en knapp för att flytta nedåt.


function App() {
  function movingOnUp(): void {
    console.log('hello');
  }
  return (
    <div className="App">
      <AnimalList animals={animals} mou={movingOnUp} />
    </div>
  );
}

export default App;
