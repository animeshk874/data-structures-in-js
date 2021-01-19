const linkedList = {
    title: 'Linked List',
    description: 'An array is a variable that can hold more than one value at a time.',
    operations: [
        {
            methodName: 'fooBar(num)',
            description: 'fooBar(num) takes in a number, divides it by 2, and then returns the floor of that value.',
            implementationCode: `function fooBar(num){
    return Math.floor(num/2);
}`,
            parameters: [
                {
                    name: 'num',
                    description: 'Number to be divided by 2'
                }
            ],
            exampleCode: `
var myNum = 100;
fooBar(myNum); // 50
            `,
            sources: [
                {
                    url: 'https://github.com/animeshk874/data-structures-in-js',
                    label: 'Data Structures in JS' // if not set, then the url will be used as the label
                }
            ],
            otherParameters: []
        }
    ]
};

export default linkedList;