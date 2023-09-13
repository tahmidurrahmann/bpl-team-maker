const Name = ({name}) => {
    return (
        <div>
            <h1>carts:{name.length}</h1>
            {
                name.map((nam, idx) => <p key={idx}>{nam.name}</p>)
            }
        </div>
    );
};

export default Name;