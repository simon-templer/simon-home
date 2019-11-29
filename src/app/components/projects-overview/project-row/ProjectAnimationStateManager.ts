import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export class InnerState {
  lineId: string;
  wasVisible: boolean;
  animationFinished: boolean;
}

@Injectable()
export class ProjectAnimationStateManager {
  states: InnerState[] = [];
  animationIndex = 0;

  onVisibleSubject = new Subject<string>();

  constructor() {
  }

  onVisible(): Observable<string> {
    return this.onVisibleSubject.asObservable();
  }

  register(lineId: string) {
    this.states.push({lineId: lineId, wasVisible: false, animationFinished: false});
  }

  informVisible(id: string) {
    this.states.find(state => state.lineId === id).wasVisible = true;
    const number = id.split('_');
    if (number[1] === this.animationIndex.toString()) {
      this.onVisibleSubject.next(this.states[this.animationIndex].lineId);
    }
  }

  informAnimationFinished(id: string, toState: string) {
    if (toState === 'expanded') {
      this.states.find(state => state.lineId === id).animationFinished = true;
      this.animationIndex++;

      for (const state of this.states) {
        if (state.wasVisible && !state.animationFinished) {
          this.onVisibleSubject.next(state.lineId);
          break;
        }
      }
    }
  }
}
