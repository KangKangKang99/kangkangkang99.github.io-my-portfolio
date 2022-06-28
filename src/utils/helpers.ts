import moment from 'moment';

export function calcYearsExp(): number {
    // my first exp: 2021
    const yearCount = moment().year() - 2021;
    const monthCount = moment().month() + 1;
    return yearCount + (monthCount <= 4 ? 0 : monthCount <= 8 ? 0.5 : 1);
}
