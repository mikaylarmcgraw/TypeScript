import ReactDOM from 'react-dom';
import UserSearch from './state/userSearch';

const App = () =>{
    return (<div>
        <UserSearch/>
    </div>);
};

ReactDOM.render(<App/>, document.querySelector('#root'));