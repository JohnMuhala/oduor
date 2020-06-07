function session_3() {
    //Arrays: Collection of objects(numbers, string, boolens,js objects, maps,sets...)
    //The collectionof objects in an array are reffered to as elements

    let arr = [1, 2,true, {a: 1, b:3}];

    const loop_4 = [
        "Claire Akinyi",
        "John Oduor",
        "Boniface Mwangi",
        "Mike Opondo",
    ];

    const loop_4a = [
        {
            codename: "Loop 4.0",
            Intake: "April/May",
            year: 2020,
            //Demo pending
            student_name: loop_4
        }
    ]

    let l1 = arr.length; //Bind length of arr to l1
    console.log("The length of the original array is" + l1); //log out l1

    let element = arr[3]; //Access array elements
    console.log ("The third element in the array is " + element);

    console.log("The original array is " + arr);

    arr.push(
        {
            company:"lakehub",
            address:'okore, milimani kisumu'
        }
    );

    l1 = arr.length;
    console.log ('the length of the new array is' + l1);
    console.log('the new array is' + arr);

    
}