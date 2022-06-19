radio.setGroup(1)
radio.setTransmitSerialNumber(true)
radio.sendNumber(1)
basic.forever(function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
