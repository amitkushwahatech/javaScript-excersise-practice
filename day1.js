# javaScript-excersise-practice

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];
// console.log(people)
// Exercises

// 1) What is the average income of all the people in the array?
// console.log("average income" ,people.reduce((acc,curr)=> acc + parseInt(curr.salary),0)/people.length)

// console.log(people[1].DOB.split('/')[2])
// 2) Who are the people that are currently older than 30?
// console.log(people.filter(i=> new Date().getFullYear()-i.DOB.split('/')[2] >30))
// console.log(people.filter(i=> new Date().getFullYear()-new Date(i.DOB).getFullYear() >30))

// 3) Get a list of the people's full name (firstName and lastName).
// console.log(people.map(i=>i.firstName+" " +i.lastName))

// console.log(people.map(person => ({...person, fullName : `${person.firstName} ${person.lastName}`})));
// 4) Get a list of people in the array ordered from youngest to oldest.
// console.log(people);
// console.log(people.sort((a,b)=>a.DOB -b.DOB))
// console.log(people.sort((a,b)=>new Date(a.DOB) -new Date(b.DOB)))

// 5) How many people are there in each department?

// console.log(people.reduce((acc,curr) => ({...acc, [curr.department]: acc[curr.department]+1 || 1}),{}))


///////////////////////////////////////////////////////////////


const str= `avc,vac,sds
dfg,hgf,ret
ert,weq,nmv`;

// console.log(str.split('\n').map(i=>i.split(',')))

const gen = ()=>{
    return Math.floor(Math.random()*16).toString(16)
}

const getRan = ()=>{
    return '#' + Array.from({length : 6}).map(gen).join('')
}
// console.log(getRan())

/////////////////////////////////////////////////////////
//sort the string increasing order
const t = "qwadsgfsds";

// console.log(t.split('').sort((a,b)=>a>b?1:-1).join(''))

///////////////////////////////////////////////////////

//count vowels in string

const st = "avsdaseioyudcsa";
const chk = (str,letter=['a','e','i','o','u'])=>{
    return str.split('').filter(i=> letter.indexOf(i)>-1).length
}
// console.log(chk(st))

////////////////////////////////////////////////////////

//count number in string

const s = "a234a";
const ch = (str)=>{
    return str.split('').filter(i=> !isNaN(i)&& i%2==0).length
}
// console.log(ch(s))

/////////////////////////////////////////////////////

const coin = (n,lcoin=[25,10,10,5,1])=>{
    
    let c = [];
    for(let i=0;i<lcoin.length;i++){
        let r = Math.floor(n/lcoin[i]);
        for(let j=0;j<r;j++){
            c.push(lcoin[i]);
        }
        n -=r*lcoin[i];
    }
    return c;
}

// console.log(coin(46));
// console.log(coin(446));
// console.log(coin(146));
// console.log(coin(460));
// console.log(coin(13));
// console.log(coin(9));

//////////////////////////////////////////////////

// get unique char from string

const getUniq = (st)=>{
    return st.split('').filter((item,index,arr)=> {
      return  arr.slice(index+1).indexOf(item)===-1
    })
}

const s1 = (str)=>{
    return [...new Set(str.split(''))];
}
console.log(getUniq('aaaasada'))
console.log(s1('aaaasada'))



























