


export default function IdCard(props){
    const {person} = props
    return(
        <div className="list">
            

            <p><strong>LastName:</strong>{person.lastName}</p>
            <p><strong>FirstName:</strong>{person.firstName}</p>
            <p><strong>Gender:</strong>{person.gender}</p>
            <p><strong>Height:</strong>{person.height}</p>
            <p><strong>Birth:</strong>{person.birth}</p>
            <p><img src={person.picture} alt="picture"></img></p>
            
            
        </div>
    )
}