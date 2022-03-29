const db = require('../db')
const Chance = require('chance')
const chance = new Chance
const { Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDb connection error:'))


const main = async () => {
    const comments = [
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        },
        {
            first: chance.first(),
            last: chance.last(),
            description: chance.paragraph({sentences: 4}),
            date: chance.date({string: true, american: false}),
            location: chance.country({ full: true })
        }
    ]

    await Comment.insertMany(comments)
    console.log('Created comments')
}

const run = async () => {
    await main()
    db.close()
}

run()