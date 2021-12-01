const langGreetings = 
    {
      en:"Hello",
      es:"Hola",
      de:"Hallo"
    }
   

export default function Greetings(props){
    return(
        <div>
            {langGreetings[props.lang]}
        </div>
    )
}