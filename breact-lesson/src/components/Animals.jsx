function Animals({animal, id, weight}) {
    switch (animal) {
        case 'cow': return(<div className="cow"><span>Cow id: {id}</span><span>Weight: {weight}</span><span>Weight: <input></input><button>Set</button></span><span><button>Farewell</button></span></div>)
        case 'sheep': return(<div className="sheep"><span>Sheep id: {id}</span><span>Weight: {weight}</span><span>Weight: <input></input><button>Set</button></span><span><button>Farewell</button></span></div>)
        case 'horse': return(<div className="horse"><span>Horse id: {id}</span><span>Weight: {weight}</span><span>Weight: <input></input><button>Set</button></span><span><button>Farewell</button></span></div>)
        default: 
            break;
    }
}

export default Animals;