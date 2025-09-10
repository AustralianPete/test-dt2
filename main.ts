input.onButtonPressed(Button.A, function () {
    basic.showString("Charger")
    basic.pause(100)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    Objects += 1
    basic.showNumber(Objects)
    basic.showString("Pencil Case")
    basic.pause(100)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    Objects += 1
    basic.showNumber(Objects)
    basic.pause(100)
    basic.showString("Book")
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    Objects += 1
    basic.showNumber(Objects)
})
input.onButtonPressed(Button.B, function () {
    Objects += -1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    basic.showNumber(Objects)
})
let Objects = 0
Objects = 0
OLED.init(256, 256)
