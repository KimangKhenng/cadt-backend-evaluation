export default class Duration {
   /**
    * Total duration in seconds.
    * @type {number}
    * @private
    */
   _totalSeconds;

   /**
    * Creates a new Duration.
    * @param {number} [seconds=0] - Seconds duration.
    */
   constructor(seconds = 0) {
       this._totalSeconds = seconds;
   }

   /**
    * Creates Duration from minutes and seconds.
    * @param {number} [minutes=0] - Minutes component.
    * @param {number} [seconds=0] - Seconds component.
    * @returns {Duration} New Duration instance.
    */
   static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
       return new Duration(minutes * 60 + seconds);
   }

   /**
    * Adds another Duration to this one.
    * @param {Duration} other - Duration to add.
    * @returns {Duration} New Duration representing sum.
    */
   plus(other) {
       if (!(other instanceof Duration)) {
           throw new Error('Argument must be a Duration');
       }
       return new Duration(this._totalSeconds + other._totalSeconds);
   }

   /**
    * Subtracts another Duration from this one.
    * @param {Duration} other - Duration to subtract.
    * @returns {Duration} New Duration representing difference.
    */
   minus(other) {
       if (!(other instanceof Duration)) {
           throw new Error('Argument must be a Duration');
       }
       return new Duration(this._totalSeconds - other._totalSeconds);
   }

   /**
    * Converts duration to human-readable string.
    * @returns {string} Formatted as "Xm Ys".
    */
   toString() {
       const minutes = Math.floor(this._totalSeconds / 60);
       const seconds = this._totalSeconds % 60;
       return `${minutes}m ${seconds}s`;
   }
}