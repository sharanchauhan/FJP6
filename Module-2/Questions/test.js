// Answer 3:-
// let data=[
//     {
//         name: "Delhi",
//         rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7]
//     },
//     {
//         name: "Noida",
//         rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7]
//     },
//     {
//         name: "Dehradun",
//         rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19]
//     },
//     {
//         name: "Nanital",
//         rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82]
//     },
// ]

// function rainDance(data)
// {
//     let ans=[];
//     for(let i=0;i<data.length;i++)
//     {
//         let n=data[i].name;
//         let d=data[i].rainfall;
//         let sum=0;
//         for(let j=0;j<d.length;j++)
//         {
//             sum+=d[j];
//         }
//         let avg=sum/d.length;
//         let a={
//                 name:n,
//                 avgRainfall:avg
//             };
//         ans.push(a);
//     }
//     return ans;
// }

// console.log(rainDance(data));

// Answer 7:-

// function decToBin(dec)
// {
//     return dec.toString(2);
// }

// Answer 8:-

// function spoon(str)
// {
//     let a=str.split(" ");
//     let a1=a[0];
//     let a2=a[1];
//     let ans=a2[0]+a1.slice(1)+" "+a1[0]+a2.slice(1)
//     return ans;
// }

