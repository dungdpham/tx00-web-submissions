// function UserGreeting(props) {
//     const isLoggedIn = props.isLoggedIn;

//     let greetingContent;
//     if (isLoggedIn) {
//         greetingContent = <h1>Welcome back, {props.name}!</h1>
//     }  else {
//         greetingContent = <h1>Please log in to continue</h1>
//     }

//     return (
//         <div>
//             {greetingContent}
//         </div>
//     )
// }

// export default UserGreeting;


function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;

    // Conditional rendering using the ternary operator
    return (
        <div>
               {isLoggedIn ? (
                   <h1>Welcome back, User!</h1>
               ) : (
                   <h1>Please log in to continue</h1>
               )}
        </div>
    );
}

export default UserGreeting;