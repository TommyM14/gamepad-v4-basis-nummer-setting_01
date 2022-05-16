input.onButtonPressed(Button.A, function () {
    radio.sendString("U")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Both")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("D")
})
let P2 = 0
let P1 = 0
let P13 = 0
let P15 = 0
let P16 = 0
let P14 = 0
radio.setGroup(201)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
basic.forever(function () {
    P14 = pins.digitalReadPin(DigitalPin.P14)
    P16 = pins.digitalReadPin(DigitalPin.P16)
    P15 = pins.digitalReadPin(DigitalPin.P15)
    P13 = pins.digitalReadPin(DigitalPin.P13)
    P1 = pins.analogReadPin(AnalogPin.P1)
    P2 = pins.analogReadPin(AnalogPin.P2)
    if (P14 == 0) {
        radio.sendString("D14")
    } else if (P16 == 0) {
        radio.sendString("D16")
    } else if (P15 == 0) {
        radio.sendString("D15")
    } else if (P13 == 0) {
        radio.sendString("D13")
    }
    if (P2 > 550 && (P1 > 400 && P1 < 600)) {
        radio.sendValue("A1", P2)
    } else if (P2 < 450 && (P1 > 400 && P1 < 600)) {
        radio.sendValue("A2", P2)
    } else if (P1 < 450 && (P2 > 400 && P2 < 600)) {
        radio.sendValue("A3", P1)
    } else if (P1 > 550 && (P2 > 400 && P2 < 600)) {
        radio.sendValue("A4", P1)
    } else {
        radio.sendString("Stop")
    }
})
