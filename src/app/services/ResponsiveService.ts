
// globals.ts
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class ResponsiveService {
    private screenSize = new ReplaySubject();

    constructor() {
        this.checkWidth();
    }

    onMobileChange(screenSizeLiteral: string) {
        this.screenSize.next(screenSizeLiteral);
    }

    getScreenSize(): Observable<any> {
        return this.screenSize.asObservable();
    }

    public checkWidth() {
        const width = window.innerWidth;
        if (width <= 768) {
            this.onMobileChange('xs');
        } else if (width > 768 && width <= 992) {
            this.onMobileChange('sm');
        } else if (width > 992 && width <= 1200) {
            this.onMobileChange('md');
        } else {
            this.onMobileChange('lg');
        }
    }

}
