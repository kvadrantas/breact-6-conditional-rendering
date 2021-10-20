import Animals from "./components/Animals";
import { useState } from "react";

function App() {

    const[animal, setAnimal] = useState([]);
    const[farm, setFarm] = useState('left');

    const pickFarm = (f) => {
        setFarm(f);
    }

    const addAnimal = (a) => {
        const animalCopy = animal.slice();
        animalCopy.push({
            farm: farm,
            animal: a
        });
        setAnimal(animalCopy);
    }

    return(
        <>
            <div className="content">
  
                <div className='left-field'>
                    {animal.map((e, ind) => 
                        {if(e.farm === 'left') 
                            return(<Animals key={ind} animal={e.animal}/>);
                            return '';
                        } 
                    )}
                </div>
                <div className="right-field">
                    {animal.map((e, ind) => 
                        {if(e.farm === 'right') 
                            return(<Animals key={ind} animal={e.animal}/>);
                            return '';
                        } 
                    )}
                </div>


                <div className="navigation">
                    <div className="field-buttons">
                        <button onClick={() => pickFarm('left')}>Left Field</button>
                        <button onClick={() => pickFarm('right')}>Right Field</button>
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