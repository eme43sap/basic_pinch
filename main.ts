basic.showIcon(IconNames.SmallSquare)
DFRobotMaqueenPluss.servoRun(Servos.S1, 150)
basic.pause(1000)
DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 31)
DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CCW, 31)
basic.pause(1000)
DFRobotMaqueenPluss.mototStop(Motors.ALL)
DFRobotMaqueenPluss.servoRun(Servos.S1, -150)
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
