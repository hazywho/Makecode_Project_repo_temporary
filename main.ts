let tmp = 0
let h = 0
let wetness = 0
input.onButtonPressed(Button.A, function () {
    if (20 < tmp) {
        basic.showString("Opening light")
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (10 < h) {
        basic.showString("Spraying water")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(wetness)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tmp)
})
basic.forever(function () {
    wetness = pins.digitalReadPin(DigitalPin.P0)
})
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    dht11_dht22.selectTempType(tempType.celsius)
    if (dht11_dht22.readDataSuccessful()) {
        h = dht11_dht22.readData(dataType.humidity)
        tmp = dht11_dht22.readData(dataType.temperature)
    }
})
