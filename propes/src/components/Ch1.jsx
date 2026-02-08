import Ch2 from "../components/Ch2"
function Ch1(props){
    return(

        <>
        <h1> this is a ch1 page</h1> 
        <Ch2 name={props.city}/> 
        
        
        </>
    )
}
export default Ch1