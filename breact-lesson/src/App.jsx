import Animals from "./components/Animals";
import { useState, useEffect } from "react";
import genId from "./js/genId";
import count from "./js/count";

function App() {

    const[animal, setAnimal] = useState([]);
    const[farm, setFarm] = useState(1);
    const[executed, setExecuted] = useState(0);

    const pickFarm = (e) => {
        console.log(typeof e.target.value)
        setFarm(parseInt(e.target.value));
    }

    const addAnimal = (a) => {
        const animalCopy = animal.slice();
        animalCopy.push({
            id: genId(),
            farm: farm,
            animal: a,
            weight: 0
        });
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
    }

    const removeAnimal = (id) => {
        const animalCopy = animal.slice();
        const ind = animalCopy.findIndex(e => e.id === id);
        animalCopy.splice(ind, 1);
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
        setExecuted(executed + 1);
    }

    const addWeight = (id, weight) => {
        const animalCopy = animal.slice();
        const ind = animalCopy.findIndex(e => e.id === id);
        animalCopy[ind].weight = weight;
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
        document.getElementById(id).value = '';
    }

    useEffect(() => {
        const animals = localStorage.getItem('animals');
        if (null !== animals)
            setAnimal(JSON.parse(animals));
    }, []);

    return(
        <>
            <div className="stats-title">STATISTICS:</div>
            <div className="stats">
                <div className="stat-block">
                    <div className="stat-val">Cows: <span>{count('cow')}</span></div>
                    <div className="stat-val">Sheeps: <span>{count('sheep')}</span></div>
                    <div className="stat-val">Horses: <span>{count('horse')}</span></div>
                </div>
                <div className="stat-block">
                    <div className="stat-val">Total animals: <span>{count('all')}</span></div>
                    <div className="stat-val">Total weight: <span>{count('weight')}</span></div>
                    <div className="stat-val">Executed: <span>{executed}</span></div>
                </div>
            </div>


            <div className="content">
  
                <div className='field'>
                    {animal.map((e, ind) => 
                        {if(e.farm === 1) 
                            return(<Animals key={ind} animal={e.animal} id={e.id} weight={e.weight} removeAnimal={removeAnimal} addWeight={addWeight}/>);
                            return '';
                        } 
                    )}
                </div>
                <div className="field">
                    {animal.map((e, ind) => 
                        {if(e.farm === 2) 
                            return(<Animals key={ind} animal={e.animal} id={e.id} weight={e.weight} removeAnimal={removeAnimal} addWeight={addWeight}/>);
                            return '';
                        } 
                    )}
                </div>
                <div className="field">
                    {animal.map((e, ind) => 
                        {if(e.farm === 3) 
                            return(<Animals key={ind} animal={e.animal} id={e.id} weight={e.weight} removeAnimal={removeAnimal} addWeight={addWeight}/>);
                            return '';
                        } 
                    )}
                </div>


                <div className="navigation">
                    <div className="field-buttons">
                        <select value={farm} onChange={pickFarm}>
                            <option value={1}>Farm 1</option>
                            <option value={2}>Farm 2</option>
                            <option value={3}>Farm 3</option>
                        </select>
                        {/* <button onClick={() => pickFarm(1)}>Left Field</button>
                        <button onClick={() => pickFarm(2)}>Right Field</button> */}
                    </div>
                    <div className="animal-buttons">
                        <button onClick={() => addAnimal('cow')}>Cow</button>
                        <button onClick={() => addAnimal('sheep')}>Sheep</button>
                        <button onClick={() => addAnimal('horse')}>Horse</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;