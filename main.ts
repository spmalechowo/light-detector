basic.forever(function () {
    if (input.lightLevel() < 30) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.StickFigure)
    }
})
