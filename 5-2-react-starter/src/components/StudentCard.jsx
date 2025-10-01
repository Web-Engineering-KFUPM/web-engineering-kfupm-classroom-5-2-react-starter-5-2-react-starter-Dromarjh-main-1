function StudentCard(props) {
    return <div>
        <h3>Name: {props.name}</h3>
        <p>ID: {props.sid}</p>
        <p>Department: {props.dep}</p>
    </div>
}
export default StudentCard;