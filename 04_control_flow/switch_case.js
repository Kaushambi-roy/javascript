//************basic switch case syntax********** */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break; // if at any point break is not given and the case above that is matched with the switch then all other switch cases after that will be executed by default

    default:
        console.log("default matched");        
        break;
}

 