import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.get('/posts', (req, res) => {
    return res.json([
        {
            id: 'test-1',
            i18n: {
                de: {
                    title: 'tester 1',
                    content: 'test beschreibnung',
                },
                en: {
                    title: 'testing 1',
                    content: 'test description'
                }
            }
        },
        {
            id: 'test-2',
            i18n: {
                de: {
                    title: 'tester 2',
                    content: 'test 2 beschreibnung',
                },
                en: {
                    title: 'testing 2',
                    content: 'test 2 description'
                }
            }
        },
    ])
})

app.get('/links', (req, res) => {
    return res.json([
        {
            url: '/',
            i18n: {
                de: {
                    title: 'Home',
                },
                en: {
                    title: 'Home',
                }
            }
        },
        {
            url: '/posts',
            i18n: {
                de: {
                    title: 'Posts',
                },
                en: {
                    title: 'Beiträge',
                }
            }
        }
    ])
})

app.listen(3003)