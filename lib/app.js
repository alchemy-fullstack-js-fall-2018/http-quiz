const penguins = [
    {
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    },
    {
        name: 'bernard',
        description: 'hello penguin',
        age: 6
    }
];

module.exports = (req, res) => {

    res.end('time to write the app!');

};
