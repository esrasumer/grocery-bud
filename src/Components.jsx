import { useState } from 'react';
function App() {
    const [name, setName] = useState('')
    return (
        <div>
            <input type="text" placeholder='bir şeyler yaz..'
                value={name}
                onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

export default App;