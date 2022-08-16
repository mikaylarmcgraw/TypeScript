import {useState} from 'react';

const GuestList: React.FC = () =>{
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
        console.log(guests.length);
    };

   const onEnterKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter')
        {
            onClick();
        }
    };

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => (
            <li key={guest}>{guest}</li>
            ))}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)} onKeyPress={onEnterKeyPress}/>
        <button onClick={onClick} >Add Guest</button>
        </div>;
};

export default GuestList;