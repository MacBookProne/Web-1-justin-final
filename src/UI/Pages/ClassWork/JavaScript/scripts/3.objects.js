/*===================================
||
|| Objects
||
===================================*/
const objectsScript = () => {

    console.group('Objects');

        const myObj = {
            first: 'Justin',
            last: 'ODea',
            email: 'odeajustin@gmail.com',
        }

        console.log('myObj:', myObj);
        console.log('myObj.first:', myObj.first);
        console.log('myObj.last:', myObj.last);
        console.log('myObj.email:', myObj.email);

        // Add/Update
        myObj.age = 28;
        myObj.email = 'odeajustin@gmail.com';
        console.log('myObj:', myObj);


    console.groupEnd();

}

export default objectsScript;