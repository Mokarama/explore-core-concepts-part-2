

const Friend = ({friend}) => {
    const [name]=friend;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Friend;