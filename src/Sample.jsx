export default function Sample() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('hello')
    }

    return (
        <div>
            <button onClick={handleSubmit}>Button</button>
        </div>
    )
}