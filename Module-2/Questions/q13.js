let users = [ { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, { name: "Bhavesh", age: 37, address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, { name: "Jasbir", age: 38, address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [ { id: 1, name: "Chair" }, { id: 2, name: "PS5" }, ], }, ];

function updateUsers(users, userObject, item) 
{
    //write your code here
    let flag=-1;
    for(let i=0;i<users.length;i++)
    {
        if(users[i].name==userObject.name)
        {
            flag=1;
        }
    }
    if(flag==-1)
    {
        let obj=
        {
            userObject,
            orders: [{ id: 1, name: item }]
        }
        users.push(obj);
        return users;
    }
    else
    {
        let f=-1;
        for(let i=0;i<users.length;i++)
        {
            for(let j=0;j<users[i].order[i].length;j++)
            {
                if(users[i].orders[j].name==item)
                {
                    f=1;
                    return {msg:"Already Ordered"}
                }
                else
                {
                    let obj=
                    {
                        id:users[i].orders.length,
                        name:item
                    }
                    users[i].orders.push(obj);
                    return users;
                }
            }
        }
    }
}

console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "GOT Book Series" ) ) );

console.log( JSON.stringify( updateUsers(users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }) ) );

console.log( JSON.stringify( updateUsers( users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }, "Chair" ) ) );

console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "Fan" ) ) );

JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "GOT Book Series" ) ) );

console.log( JSON.stringify( updateUsers(users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }) ) );

console.log( JSON.stringify( updateUsers( users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }, "Chair" ) ) );

console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "Fan" ) ) );

