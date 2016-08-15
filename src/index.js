import $ from 'jquery'
import async01 from './js/async01.js'
import async02 from './js/async02.js'
import async03 from './js/async03.js'
import async04 from './js/async04.js'

window.onload = () => {
    $('button').eq(0).on('click', async01)
    $('button').eq(1).on('click', async02)
    $('button').eq(2).on('click', async03)
    $('button').eq(3).on('click', async04)
}