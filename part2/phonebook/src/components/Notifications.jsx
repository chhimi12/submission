const Notification = ({ message , type }) => {

    // expects prop object that contains the data , but rn it is receving a prop object which it tries to destructure but there is another object inside it 
    let Style ;

    if (type === 'positive') {

    Style = {
        color: 'White',
        fontStyle: 'italic',
        fontSize: 16,
        borderStyle: 'solid', borderWidth: 5 , borderColor: 'black', backgroundColor: 'green',padding: "20px"


    }
}
    else if (type === 'negative'){
        Style = {
            color: 'white',
            fontStyle: 'italic',
            fontSize: 16,
            borderStyle: 'solid', borderWidth: 5 , borderColor: 'black', backgroundColor: 'red',padding: "20px"
    
    
        }
    }
    if (message === null) {
        return null
    }

    return (
        <div style={Style}>
            {message}
        </div>
    )
}


export default Notification