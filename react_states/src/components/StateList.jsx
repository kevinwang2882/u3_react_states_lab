
import { Link } from 'react-router-dom';

function StateList({ states }) {
    return (
        <div>
            <h2>States</h2>
            <ul>
                {states.map(state => (
                    <li key={state.abbreviation}>
                        <Link to={`/states/${state.abbreviation}`}>{state.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StateList;
