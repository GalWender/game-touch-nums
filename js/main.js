'use strict'


var redo = setInterval(startTimer, 47)
var stopWatch = document.querySelector('.timer')
var miliSec = 0
var sec = 0
var min = 0
var count = false
var accendCount = 1
var cellCounter = 0
var levelEnd = 0



function init(level) {
    renderBoard(level)
    miliSec = 0
    sec = 0
    min = 0
    count = false
    accendCount = 1
    cellCounter = 0
    stopWatch.innerText = '00:00:000'
    levelEnd = level
}

function renderBoard(level) {
    var randomArray = []
    for (var i = 0; i < level; i++) {
        randomArray.push(i + 1)
    }
    randomArraySort(randomArray)
    var strHTML = ''
    for (var i = 0; i < randomArray.length ** 0.5; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < randomArray.length ** 0.5; j++) {
            var cell = randomArray[cellCounter]
            strHTML += `<td onclick="cellClicked(this)" >${cell}</td>`
            cellCounter++
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('tbody.board')
    elBoard.innerHTML = strHTML
}

function cellClicked(clickedNum) {
    if (parseInt(clickedNum.innerText) == accendCount) {
        if (parseInt(clickedNum.innerText) == 1) {
            count = true
            startTimer()
        }
        clickedNum.style.backgroundColor = 'rgb(249, 84, 66)'
        accendCount++
        if (parseInt(clickedNum.innerText) == levelEnd) {

            count = false
            clearInterval(startTimer)
        }

    }
}

function levels(btnLevel) {
    if (parseInt(btnLevel.innerText) == 16) {
        init(16)
    }
    if (parseInt(btnLevel.innerText) == 25) {
        init(25)
    }
    if (parseInt(btnLevel.innerText) == 36) {
        init(36)
    }
}

function randomArraySort(array) {
    var shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    return shuffledArray
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function startTimer() {
    if (count) {
        miliSec = parseInt(miliSec)
        sec = parseInt(sec)
        min = parseInt(min)

        miliSec += 48

        if (miliSec >= 1000) {
            sec++
            miliSec = 0
        }

        if (sec == 60) {
            min++
            sec = 0
            miliSec = 0
        }

        if (miliSec < 10) {
            miliSec = '0' + miliSec
        }

        if (sec < 10) {
            sec = '0' + sec
        }

        if (min < 10) {
            min = '0' + min
        }
        stopWatch.innerText = min + ' : ' + sec + ' : ' + miliSec

    }
}
