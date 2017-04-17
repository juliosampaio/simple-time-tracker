import 'moment-duration-format';
import * as moment from 'moment';

interface DuarationFormatSettings {
  format   : string;
  settings : any;
}

interface Session {
  start: number;
  end?  : number;
}

export class Task {
  title    : string;
  isActive : boolean;
  sessions : Session[] = [];

  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.sessions.push({ start: this.now() })
    }    
  }

  stop() {
    if (this.isActive) {
      this.isActive = false;
      this.sessions[this.sessions.length - 1].end = this.now();
    }
  }

  getDuration(formatSettings? : DuarationFormatSettings) : moment.Duration | string {
    let totalDuration = moment.duration();
    this.sessions.forEach((session) => {
      let now      = new Date().getTime();
      let start    = session.start || now;
      let end      = session.end || now;
      let duration = moment.duration(moment(end).diff(start));
      totalDuration.add(duration);
    });
    return (formatSettings) ? (<any> totalDuration).format(formatSettings.format, formatSettings.settings) : totalDuration;
  }

  private now() {
    return new Date().getTime();
  }
}
