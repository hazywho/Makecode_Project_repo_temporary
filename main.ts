let tmp = 0
let h = 0
basic.forever(function () {
    tmp = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(tmp)
})
basic.forever(function () {
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
