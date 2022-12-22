import { useState } from 'react';
import Alert from './Alert'
import List from './List'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  function handleSubmit(e) {
    e.preventDefault();
    if(!name){

    }else if(name && isEditing){
  
    }
    else{
      const newItem = {id: new Date().getTime().toString(),
      title:name};
      setList([...list,newItem])
      setName('')
    }
    // console.log('hello');
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. eggs' value={name}
            onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        {/* <List items={list}/> */}
        {list.map((item) => {
                const { id, title } = item
                return (
                    <article key={id} className='grocery-item'>
                        <p className="title">{title}</p>
                    </article>
                )
            })}
        <button className='clear-btn'>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
