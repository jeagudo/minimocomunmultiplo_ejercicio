radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber % bus1 == 0) {
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
    } else {
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(minutos)
    radio.sendNumber(minutos)
    minutos += 1
})
input.onButtonPressed(Button.B, function () {
    minutos = 1
    basic.clearScreen()
})
let bus1 = 0
let minutos = 0
radio.setGroup(1)
minutos = 1
bus1 = 2
