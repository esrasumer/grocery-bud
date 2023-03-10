import { FaEdit, FaTrash } from 'react-icons/fa'

export default function List({ items }) {
    return (
        <div className="grocery-list">
            {items.map((item) => {
                const { id, title } = item
                return (
                    <article key={id} className='grocery-item'>
                        <p className="title">{title}</p>
                    </article>
                )
            })}
        </div>
    )
}