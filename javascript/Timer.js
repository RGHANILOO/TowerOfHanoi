/**
 * Timer Class()
    Respnsibilioty:
    managing the game timers

    Methods:

        startTimer()
        stopTimer()
        getElapsedTime() : retrieves the total elapsed time since the timer started/game started
    
 */

class Timer {
    constructor() {
        this.start_time = null;
        this.stop_time = null;
    }   
    startTimer() {
        this.start_time = new Date();
    }
    stopTimer() {
        this.stop_time = new Date();
    }
    getElapsedTime() {
        return this.stop_time - this.start_time;        

    }
}
