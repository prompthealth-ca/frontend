import { IBlog } from "./blog";

export class EventData {

  get startAt(): Date { return this._startAt; }
  get endAt(): Date { return this._endAt; }
  get duration(): number { return (this._endAt.getTime() - this._startAt.getTime()) / 1000 / 60; /** unit: minute */ }
  get durationFormatted(): string { return this.getFormattedTime(this.duration);}

  get link() { return this.data.joinEventLink; }
  get status() { return this._status; }
  get isFinished() { return (this.status == 'finished'); }
  get isVirtual() { return true; }
  get eventOn() { return this.getVenueFromURL(); }

  private _startAt: Date;
  private _endAt: Date;
  private _status: string;

  constructor(private data: IBlog){
    this._startAt = (this.data.eventStartTime) ?  new Date(this.data.eventStartTime) : null;
    this._endAt = (this.data.eventEndTime) ? new Date(this.data.eventEndTime) : null;

    const now = new Date();
    let status: string;
    if(!this._startAt || !this._endAt) {
      status = null;
    } else if (this._startAt.getTime() - now.getTime() > 60 * 60 * 1000) {
      status = 'upcoming';
    } else if (this._startAt.getTime() - now.getTime() > 0) {
      status = 'open soon';
    } else if (this._endAt.getTime() - now.getTime() > 0) {
      status = 'on going';
    } else {
      status = 'finished';
    }
    this._status = status;
  }

  getFormattedTime(minutes: number) { 
    let res: string = '';
    if(minutes >= 60) {
      const h = Math.ceil(minutes / 60 * 100) / 100;
      res = h + 'hour' + (h > 1 ? 's' : '');
    } else {
      res = minutes + 'min' + (minutes > 1 ? 's' : '');      
    }
    return res;
  }

  getVenueFromURL() {
    let venue: string = null;

    if(this.data.joinEventLink) {
      let path = this.data.joinEventLink;
      let host = null;
      host = path.replace(/http(s)?:\/\/(www\.)?/, '').replace(/\/.*$/, '');

      const match = host.match(/(eventbrite|zoom|meet)/);
      switch(true) {
        case /eventbrite/.test(host):
          venue = 'Eventbrite';
          break;
        case /easywebinar/.test(host):
          venue = 'Easywebinar';
          break;

        case /zoom/.test(host):
          venue = 'Zoom';
          break;
        case /meet\.google/.test(host):
          venue = 'Google Meet';
          break;
        case /teams/.test(host):
          venue = 'Teams';
          break;

        case /clubhouse/.test(host):
          venue = 'Clubhouse';
          break;
        case /twitter\.com\/i\/spaces/.test(path):
          venue = 'Spaces';
          break;
        case /fb\.me|facebook/.test(host):
          venue = 'Facebook';
          break;
        case /meetup/.test(host):
          venue = 'Meetup';
          break;
        case /instagram/.test(host):
          venue = 'Instagram';
          break;
        default: 
          venue = null;
      }
    }

    return venue;
  }
}

