var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
})(Direction || (Direction = {}));
var Probe;
(function (Probe) {
    Probe[Probe["Default"] = 0] = "Default";
    Probe[Probe["Throttle"] = 1] = "Throttle";
    Probe[Probe["Normal"] = 2] = "Normal";
    Probe[Probe["Realtime"] = 3] = "Realtime";
})(Probe || (Probe = {}));
var BScroll = /** @class */ (function () {
    function BScroll() {
    }
    BScroll.prototype.enable = function () { };
    return BScroll;
}());

var up = Direction.UP;
var bscroll = new BScroll();
// export const a = import('./hello')

export { bscroll, up };
