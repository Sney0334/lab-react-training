export default function BoxColor(props){
    const {r,g,b}= props.color
    const style = {
        "banckgroundColor": `rgb(${r},${g},${b})`,
        "height":"100px",
        "width":"400px"
    }
 return(
     <div className="rectangle" style="style">
        
     </div>
 )
 
}