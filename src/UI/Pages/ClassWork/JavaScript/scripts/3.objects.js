/*===================================
||
|| Objects
||
===================================*/
const objectsScript = () => {

    console.group('Objects');

        const myObj = {
            first: 'Mitch',
            last: 'Gohman',
            email: 'meatch@me.com',
        }

        console.log('myObj:', myObj);
        console.log('myObj.first:', myObj.first);
        console.log('myObj.last:', myObj.last);
        console.log('myObj.email:', myObj.email);

        // Add/Update
        myObj.age = 47;
        myObj.email = 'meatched@gmail.com';
        console.log('myObj:', myObj);


    console.groupEnd();

}

export default objectsScript;