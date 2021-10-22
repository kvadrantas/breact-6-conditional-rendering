function Animals({animal, id, weight, removeAnimal, addWeight}) {
    const wColor = weight > 100 ? 'red' : null;
    if (weight > 200) {
        setTimeout(() => {
            removeAnimal(parseInt(id));
        }, 100);
        return null;
    }

    switch (animal) {
        case 'cow': return(<div className="cow"><span>Cow id: {id}</span><span style={{color: wColor}}>Weight: {weight}</span><span>Weight: <input id={id}></input><button onClick={() => addWeight(id, parseInt(document.getElementById(id).value))}>Set</button></span><span><button onClick={() => removeAnimal(parseInt(id))}>Farewell</button></span></div>)
        case 'sheep': return(<div className="sheep"><span>Sheep id: {id}</span><span style={{color: wColor}}>Weight: {weight}</span><span>Weight: <input id={id}></input><button onClick={() => addWeight(id, parseInt(document.getElementById(id).value))}>Set</button></span><span><button onClick={() => removeAnimal(parseInt(id))}>Farewell</button></span></div>)
        case 'horse': return(<div className="horse"><span>Horse id: {id}</span><span style={{color: wColor}}>Weight: {weight}</span><span>Weight: <input id={id}></input><button onClick={() => addWeight(id, parseInt(document.getElementById(id).value))}>Set</button></span><span><button onClick={() => removeAnimal(parseInt(id))}>Farewell</button></span></div>)
        default: 
            break;
    }
}

export default Animals;