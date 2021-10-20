function Animals({animal}) {
    switch (animal) {
        case 'cow': return(<div className="cow"></div>)
        case 'sheep': return(<div className="sheep"></div>)
        case 'horse': return(<div className="horse"></div>)
        default: 
            break;
    }
}

export default Animals;