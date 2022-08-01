'use strict'
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function isInArray(array, num) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == num) { return true }
    } return false
}

function copyMat(mat) {
    var newMat = [];
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = [];
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j];
        }
    }
    return newMat;
}

function randomArraySort(array) {
    var shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    return shuffledArray
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
        // setTimeout('startTimer()', 0050)
    }
}
function zeroPad(num, size) {
    var srtPad = '0'.repeat(size)
    return srtPad.substring(srtPad.length - size)
}
