
const request = require('supertest')
const cheerio = require('cheerio')
const server = require('./server.js')

test('tests working', () => {
    expect(true).toBe(true)
})

test('header loading', (done) => {
    
    request(server)

    .get('/')
    .end((err, res) => {
        expect(err).toBe(null)

        const $ = cheerio.load(res.text)
        const actual = $('.header').length
        expect(actual).toBe(1)

    })

    done()
})


test('header loading', (done) => {
    
    request(server)

    .get('/')
    .end((err, res) => {
        expect(err).toBe(null)

        const $ = cheerio.load(res.text)
        const actual = $('.footer').length
        expect(actual).toBe(1)

    })

    done()
})

test('question has content', (done) => {
    request(server)

    .get('/quiz/1')
    .end((err, res) => {
        expect(err).toBe(null)

        const $ = cheerio.load(res.text)
        const actual = $('h2').text()
        
        expect(actual).toContain('colour')

    })

    done()
})

test('question has content', (done) => {
    request(server)

    .get('/')
    .end((err, res) => {
        expect(err).toBe(null)

        const $ = cheerio.load(res.text)
        const actual = $('h2').length
        
        expect(actual).toBe(1)

    })

    done()
})