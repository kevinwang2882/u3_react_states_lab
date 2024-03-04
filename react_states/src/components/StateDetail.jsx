import { useParams } from 'react-router-dom';

function StateDetail({ states }) {
    const { id } = useParams();
    const state = states.find(state => state.abbreviation === id);

   
    if (!state) {
        return <div>State not found</div>;
        
    }

    return (
        <div>
            <h1>{state.name}</h1>
            <p>{state.abbreviation}</p>
            <p>{state.capital}</p>
            <p> {state.incorporation_date}</p>
            <p>{state.timezone}</p>
            <p>{state.quality_of_pizza}</p>
            
        </div>
    );
}

export default StateDetail;