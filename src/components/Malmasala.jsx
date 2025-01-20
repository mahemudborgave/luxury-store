function Malmasala(props) {
    return (
        <div className="border-2 border-solid border-pink-800 mt-3 text-xl p-3">
            <p>{props.vlabel}</p>
            <a href={props.vlabel}>Here is your link</a>
        </div>
    );
}

export default Malmasala;