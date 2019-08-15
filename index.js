//Exercise 1
let my_name="Kevin";
let my_id="2112";
let my_address="Memphis,TN";
let my_template_string= (
    `My name is ${my_name}
     My id is: ${my_id}
     My address is ${my_address}
    `);
console.log(my_template_string);

//Exercise 2
let contestant = "1_M_l337!";
let score = "9001";
let conScore=(`Congratulations ${contestant} !!!, your score is ${score}!`);
console.log(conScore);

//Exercise 3
let parents =
    [
        {
            name: "Mr. Bill",
            children: ["Sluggo", "Spot", "Linda"]
        },
        {
            name: "Nancy R.",
            children: ["Stan"]
        },
        {
            name: "J. Page",
            children: ["Mick", "Robert", "John", "Kenny"]
        },
        {
            name: "Randolh H.",
            children: ["Biffy", "Carl Jr."]
        }
    ];
for (idx in parents)
{
    console.log(`${parents[idx].name}`);

    let kiddos = parents[idx].children;

    console.log(kiddos);

    for(idx in parents.children)
    {
        console.log(`${parents.children[index]}`);

        let pKiddos= parents.children[idx];
        console.log(pKiddos)
    }
}

