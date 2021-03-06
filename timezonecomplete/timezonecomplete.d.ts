// Type definitions for timezonecomplete 1.15.0
// Project: https://github.com/SpiritIT/timezonecomplete
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'timezonecomplete' {
    import basics = require("__timezonecomplete/basics");
    export import TimeUnit = basics.TimeUnit;
    export import WeekDay = basics.WeekDay;
    export import timeUnitToMilliseconds = basics.timeUnitToMilliseconds;
    export import isLeapYear = basics.isLeapYear;
    export import daysInMonth = basics.daysInMonth;
    export import daysInYear = basics.daysInYear;
    export import firstWeekDayOfMonth = basics.firstWeekDayOfMonth;
    export import lastWeekDayOfMonth = basics.lastWeekDayOfMonth;
    export import weekDayOnOrAfter = basics.weekDayOnOrAfter;
    export import weekDayOnOrBefore = basics.weekDayOnOrBefore;
    export import weekNumber = basics.weekNumber;
    export import weekOfMonth = basics.weekOfMonth;
    export import dayOfYear = basics.dayOfYear;
    export import secondOfDay = basics.secondOfDay;
    export import timeUnitToString = basics.timeUnitToString;
    export import stringToTimeUnit = basics.stringToTimeUnit;
    import datetime = require("__timezonecomplete/datetime");
    export import DateTime = datetime.DateTime;
    export import now = datetime.now;
    export import nowLocal = datetime.nowLocal;
    export import nowUtc = datetime.nowUtc;
    import duration = require("__timezonecomplete/duration");
    export import Duration = duration.Duration;
    export import years = duration.years;
    export import months = duration.months;
    export import days = duration.days;
    export import hours = duration.hours;
    export import minutes = duration.minutes;
    export import seconds = duration.seconds;
    export import milliseconds = duration.milliseconds;
    import javascript = require("__timezonecomplete/javascript");
    export import DateFunctions = javascript.DateFunctions;
    import period = require("__timezonecomplete/period");
    export import Period = period.Period;
    export import PeriodDst = period.PeriodDst;
    export import periodDstToString = period.periodDstToString;
    import timesource = require("__timezonecomplete/timesource");
    export import TimeSource = timesource.TimeSource;
    export import RealTimeSource = timesource.RealTimeSource;
    import timezone = require("__timezonecomplete/timezone");
    export import NormalizeOption = timezone.NormalizeOption;
    export import TimeZoneKind = timezone.TimeZoneKind;
    export import TimeZone = timezone.TimeZone;
    export import local = timezone.local;
    export import utc = timezone.utc;
    export import zone = timezone.zone;
    import globals = require("__timezonecomplete/globals");
    export import min = globals.min;
    export import max = globals.max;
}

declare module '__timezonecomplete/basics' {
    import javascript = require("__timezonecomplete/javascript");
    import DateFunctions = javascript.DateFunctions;
    /**
        * Day-of-week. Note the enum values correspond to JavaScript day-of-week:
        * Sunday = 0, Monday = 1 etc
        */
    export enum WeekDay {
            Sunday = 0,
            Monday = 1,
            Tuesday = 2,
            Wednesday = 3,
            Thursday = 4,
            Friday = 5,
            Saturday = 6,
    }
    /**
        * Time units
        */
    export enum TimeUnit {
            Millisecond = 0,
            Second = 1,
            Minute = 2,
            Hour = 3,
            Day = 4,
            Week = 5,
            Month = 6,
            Year = 7,
            /**
                * End-of-enum marker, do not use
                */
            MAX = 8,
    }
    /**
        * Approximate number of milliseconds for a time unit.
        * A day is assumed to have 24 hours, a month is assumed to equal 30 days
        * and a year is set to 360 days (because 12 months of 30 days).
        *
        * @param unit	Time unit e.g. TimeUnit.Month
        * @returns	The number of milliseconds.
        */
    export function timeUnitToMilliseconds(unit: TimeUnit): number;
    /**
        * Time unit to lowercase string. If amount is specified, then the string is put in plural form
        * if necessary.
        * @param unit The unit
        * @param amount If this is unequal to -1 and 1, then the result is pluralized
        */
    export function timeUnitToString(unit: TimeUnit, amount?: number): string;
    export function stringToTimeUnit(s: string): TimeUnit;
    /**
        * @return True iff the given year is a leap year.
        */
    export function isLeapYear(year: number): boolean;
    /**
        * The days in a given year
        */
    export function daysInYear(year: number): number;
    /**
        * @param year	The full year
        * @param month	The month 1-12
        * @return The number of days in the given month
        */
    export function daysInMonth(year: number, month: number): number;
    /**
        * Returns the day of the year of the given date [0..365]. January first is 0.
        *
        * @param year	The year e.g. 1986
        * @param month Month 1-12
        * @param day Day of month 1-31
        */
    export function dayOfYear(year: number, month: number, day: number): number;
    /**
        * Returns the last instance of the given weekday in the given month
        *
        * @param year	The year
        * @param month	the month 1-12
        * @param weekDay	the desired week day
        *
        * @return the last occurrence of the week day in the month
        */
    export function lastWeekDayOfMonth(year: number, month: number, weekDay: WeekDay): number;
    /**
        * Returns the first instance of the given weekday in the given month
        *
        * @param year	The year
        * @param month	the month 1-12
        * @param weekDay	the desired week day
        *
        * @return the first occurrence of the week day in the month
        */
    export function firstWeekDayOfMonth(year: number, month: number, weekDay: WeekDay): number;
    /**
        * Returns the day-of-month that is on the given weekday and which is >= the given day.
        * Throws if the month has no such day.
        */
    export function weekDayOnOrAfter(year: number, month: number, day: number, weekDay: WeekDay): number;
    /**
        * Returns the day-of-month that is on the given weekday and which is <= the given day.
        * Throws if the month has no such day.
        */
    export function weekDayOnOrBefore(year: number, month: number, day: number, weekDay: WeekDay): number;
    /**
        * The week of this month. There is no official standard for this,
        * but we assume the same rules for the weekNumber (i.e.
        * week 1 is the week that has the 4th day of the month in it)
        *
        * @param year The year
        * @param month The month [1-12]
        * @param day The day [1-31]
        * @return Week number [1-5]
        */
    export function weekOfMonth(year: number, month: number, day: number): number;
    /**
        * The ISO 8601 week number for the given date. Week 1 is the week
        * that has January 4th in it, and it starts on Monday.
        * See https://en.wikipedia.org/wiki/ISO_week_date
        *
        * @param year	Year e.g. 1988
        * @param month	Month 1-12
        * @param day	Day of month 1-31
        *
        * @return Week number 1-53
        */
    export function weekNumber(year: number, month: number, day: number): number;
    /**
        * Convert a unix milli timestamp into a TimeT structure.
        * This does NOT take leap seconds into account.
        */
    export function unixToTimeNoLeapSecs(unixMillis: number): TimeStruct;
    /**
        * Convert a year, month, day etc into a unix milli timestamp.
        * This does NOT take leap seconds into account.
        *
        * @param year	Year e.g. 1970
        * @param month	Month 1-12
        * @param day	Day 1-31
        * @param hour	Hour 0-23
        * @param minute	Minute 0-59
        * @param second	Second 0-59 (no leap seconds)
        * @param milli	Millisecond 0-999
        */
    export function timeToUnixNoLeapSecs(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, milli?: number): number;
    /**
        * Convert a TimeT structure into a unix milli timestamp.
        * This does NOT take leap seconds into account.
        */
    export function timeToUnixNoLeapSecs(tm: TimeStruct): number;
    /**
        * Return the day-of-week.
        * This does NOT take leap seconds into account.
        */
    export function weekDayNoLeapSecs(unixMillis: number): WeekDay;
    /**
        * N-th second in the day, counting from 0
        */
    export function secondOfDay(hour: number, minute: number, second: number): number;
    /**
        * Basic representation of a date and time
        */
    export class TimeStruct {
            /**
                * Year, 1970-...
                */
            year: number;
            /**
                * Month 1-12
                */
            month: number;
            /**
                * Day of month, 1-31
                */
            day: number;
            /**
                * Hour 0-23
                */
            hour: number;
            /**
                * Minute 0-59
                */
            minute: number;
            /**
                * Seconds, 0-59
                */
            second: number;
            /**
                * Milliseconds 0-999
                */
            milli: number;
            /**
                * Create a TimeStruct from a number of unix milliseconds
                */
            static fromUnix(unixMillis: number): TimeStruct;
            /**
                * Create a TimeStruct from a JavaScript date
                *
                * @param d	The date
                * @param df	Which functions to take (getX() or getUTCX())
                */
            static fromDate(d: Date, df: DateFunctions): TimeStruct;
            /**
                * Returns a TimeStruct from an ISO 8601 string WITHOUT time zone
                */
            static fromString(s: string): TimeStruct;
            /**
                * Constructor
                *
                * @param year	Year e.g. 1970
                * @param month	Month 1-12
                * @param day	Day 1-31
                * @param hour	Hour 0-23
                * @param minute	Minute 0-59
                * @param second	Second 0-59 (no leap seconds)
                * @param milli	Millisecond 0-999
                */
            constructor(
                    /**
                        * Year, 1970-...
                        */
                    year?: number,
                    /**
                        * Month 1-12
                        */
                    month?: number,
                    /**
                        * Day of month, 1-31
                        */
                    day?: number,
                    /**
                        * Hour 0-23
                        */
                    hour?: number,
                    /**
                        * Minute 0-59
                        */
                    minute?: number,
                    /**
                        * Seconds, 0-59
                        */
                    second?: number,
                    /**
                        * Milliseconds 0-999
                        */
                    milli?: number);
            /**
                * Validate a TimeStruct, returns false if invalid.
                */
            validate(): boolean;
            /**
                * The day-of-year 0-365
                */
            yearDay(): number;
            /**
                * Returns this time as a unix millisecond timestamp
                * Does NOT take leap seconds into account.
                */
            toUnixNoLeapSecs(): number;
            /**
                * Deep equals
                */
            equals(other: TimeStruct): boolean;
            /**
                * < operator
                */
            lessThan(other: TimeStruct): boolean;
            clone(): TimeStruct;
            valueOf(): number;
            /**
                * ISO 8601 string YYYY-MM-DDThh:mm:ss.nnn
                */
            toString(): string;
            inspect(): string;
    }
}

declare module '__timezonecomplete/datetime' {
    import basics = require("__timezonecomplete/basics");
    import WeekDay = basics.WeekDay;
    import TimeUnit = basics.TimeUnit;
    import duration = require("__timezonecomplete/duration");
    import Duration = duration.Duration;
    import javascript = require("__timezonecomplete/javascript");
    import DateFunctions = javascript.DateFunctions;
    import timesource = require("__timezonecomplete/timesource");
    import TimeSource = timesource.TimeSource;
    import timezone = require("__timezonecomplete/timezone");
    import TimeZone = timezone.TimeZone;
    /**
        * Current date+time in local time
        */
    export function nowLocal(): DateTime;
    /**
        * Current date+time in UTC time
        */
    export function nowUtc(): DateTime;
    /**
        * Current date+time in the given time zone
        * @param timeZone	The desired time zone (optional, defaults to UTC).
        */
    export function now(timeZone?: TimeZone): DateTime;
    /**
        * DateTime class which is time zone-aware
        * and which can be mocked for testing purposes.
        */
    export class DateTime {
            /**
                * Actual time source in use. Setting this property allows to
                * fake time in tests. DateTime.nowLocal() and DateTime.nowUtc()
                * use this property for obtaining the current time.
                */
            static timeSource: TimeSource;
            /**
                * Current date+time in local time
                */
            static nowLocal(): DateTime;
            /**
                * Current date+time in UTC time
                */
            static nowUtc(): DateTime;
            /**
                * Current date+time in the given time zone
                * @param timeZone	The desired time zone (optional, defaults to UTC).
                */
            static now(timeZone?: TimeZone): DateTime;
            /**
                * Create a DateTime from a Lotus 123 / Microsoft Excel date-time value
                * i.e. a double representing days since 1-1-1900 where 1900 is incorrectly seen as leap year
                */
            static fromExcel(n: number, timeZone?: TimeZone): DateTime;
            /**
                * Constructor. Creates current time in local timezone.
                */
            constructor();
            /**
                * Constructor
                * Non-existing local times are normalized by rounding up to the next DST offset.
                *
                * @param isoString	String in ISO 8601 format. Instead of ISO time zone,
                *		 it may include a space and then and IANA time zone.
                * e.g. "2007-04-05T12:30:40.500"					(no time zone, naive date)
                * e.g. "2007-04-05T12:30:40.500+01:00"				(UTC offset without daylight saving time)
                * or   "2007-04-05T12:30:40.500Z"					(UTC)
                * or   "2007-04-05T12:30:40.500 Europe/Amsterdam"	(IANA time zone, with daylight saving time if applicable)
                * @param timeZone	if given, the date in the string is assumed to be in this time zone.
                *					Note that it is NOT CONVERTED to the time zone. Useful
                *					for strings without a time zone
                */
            constructor(isoString: string, timeZone?: TimeZone);
            /**
                * Constructor. You provide a date, then you say whether to take the
                * date.getYear()/getXxx methods or the date.getUTCYear()/date.getUTCXxx methods,
                * and then you state which time zone that date is in.
                * Non-existing local times are normalized by rounding up to the next DST offset.
                * Note that the Date class has bugs and inconsistencies when constructing them with times around
                * DST changes.
                *
                * @param date	A date object.
                * @param getters	Specifies which set of Date getters contains the date in the given time zone: the
                *					Date.getXxx() methods or the Date.getUTCXxx() methods.
                * @param timeZone	The time zone that the given date is assumed to be in (may be null for unaware dates)
                */
            constructor(date: Date, getFuncs: DateFunctions, timeZone?: TimeZone);
            /**
                * Constructor. Note that unlike JavaScript dates we require fields to be in normal ranges.
                * Use the add(duration) or sub(duration) for arithmetic.
                * @param year	The full year (e.g. 2014)
                * @param month	The month [1-12] (note this deviates from JavaScript Date)
                * @param day	The day of the month [1-31]
                * @param hour	The hour of the day [0-24)
                * @param minute	The minute of the hour [0-59]
                * @param second	The second of the minute [0-59]
                * @param millisecond	The millisecond of the second [0-999]
                * @param timeZone	The time zone, or null (for unaware dates)
                */
            constructor(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number, timeZone?: TimeZone);
            /**
                * Constructor
                * @param unixTimestamp	milliseconds since 1970-01-01T00:00:00.000
                * @param timeZone	the time zone that the timestamp is assumed to be in (usually UTC).
                */
            constructor(unixTimestamp: number, timeZone?: TimeZone);
            /**
                * @return a copy of this object
                */
            clone(): DateTime;
            /**
                * @return The time zone that the date is in. May be null for unaware dates.
                */
            zone(): TimeZone;
            /**
                * Zone name abbreviation at this time
                * @param dstDependent (default true) set to false for a DST-agnostic abbreviation
                * @return The abbreviation
                */
            zoneAbbreviation(dstDependent?: boolean): string;
            /**
                * @return the offset w.r.t. UTC in minutes. Returns 0 for unaware dates and for UTC dates.
                */
            offset(): number;
            /**
                * @return The full year e.g. 2014
                */
            year(): number;
            /**
                * @return The month 1-12 (note this deviates from JavaScript Date)
                */
            month(): number;
            /**
                * @return The day of the month 1-31
                */
            day(): number;
            /**
                * @return The hour 0-23
                */
            hour(): number;
            /**
                * @return the minutes 0-59
                */
            minute(): number;
            /**
                * @return the seconds 0-59
                */
            second(): number;
            /**
                * @return the milliseconds 0-999
                */
            millisecond(): number;
            /**
                * @return the day-of-week (the enum values correspond to JavaScript
                * week day numbers)
                */
            weekDay(): WeekDay;
            /**
                * Returns the day number within the year: Jan 1st has number 0,
                * Jan 2nd has number 1 etc.
                *
                * @return the day-of-year [0-366]
                */
            dayOfYear(): number;
            /**
                * The ISO 8601 week number. Week 1 is the week
                * that has January 4th in it, and it starts on Monday.
                * See https://en.wikipedia.org/wiki/ISO_week_date
                *
                * @return Week number [1-53]
                */
            weekNumber(): number;
            /**
                * The week of this month. There is no official standard for this,
                * but we assume the same rules for the weekNumber (i.e.
                * week 1 is the week that has the 4th day of the month in it)
                *
                * @return Week number [1-5]
                */
            weekOfMonth(): number;
            /**
                * Returns the number of seconds that have passed on the current day
                * Does not consider leap seconds
                *
                * @return seconds [0-86399]
                */
            secondOfDay(): number;
            /**
                * @return Milliseconds since 1970-01-01T00:00:00.000Z
                */
            unixUtcMillis(): number;
            /**
                * @return The full year e.g. 2014
                */
            utcYear(): number;
            /**
                * @return The UTC month 1-12 (note this deviates from JavaScript Date)
                */
            utcMonth(): number;
            /**
                * @return The UTC day of the month 1-31
                */
            utcDay(): number;
            /**
                * @return The UTC hour 0-23
                */
            utcHour(): number;
            /**
                * @return The UTC minutes 0-59
                */
            utcMinute(): number;
            /**
                * @return The UTC seconds 0-59
                */
            utcSecond(): number;
            /**
                * Returns the UTC day number within the year: Jan 1st has number 0,
                * Jan 2nd has number 1 etc.
                *
                * @return the day-of-year [0-366]
                */
            utcDayOfYear(): number;
            /**
                * @return The UTC milliseconds 0-999
                */
            utcMillisecond(): number;
            /**
                * @return the UTC day-of-week (the enum values correspond to JavaScript
                * week day numbers)
                */
            utcWeekDay(): WeekDay;
            /**
                * The ISO 8601 UTC week number. Week 1 is the week
                * that has January 4th in it, and it starts on Monday.
                * See https://en.wikipedia.org/wiki/ISO_week_date
                *
                * @return Week number [1-53]
                */
            utcWeekNumber(): number;
            /**
                * The week of this month. There is no official standard for this,
                * but we assume the same rules for the weekNumber (i.e.
                * week 1 is the week that has the 4th day of the month in it)
                *
                * @return Week number [1-5]
                */
            utcWeekOfMonth(): number;
            /**
                * Returns the number of seconds that have passed on the current day
                * Does not consider leap seconds
                *
                * @return seconds [0-86399]
                */
            utcSecondOfDay(): number;
            /**
                * Convert this date to the given time zone (in-place).
                * Throws if this date does not have a time zone.
                * @return this (for chaining)
                */
            convert(zone?: TimeZone): DateTime;
            /**
                * Returns this date converted to the given time zone.
                * Unaware dates can only be converted to unaware dates (clone)
                * Converting an unaware date to an aware date throws an exception. Use the constructor
                * if you really need to do that.
                *
                * @param zone	The new time zone. This may be null to create unaware date.
                * @return The converted date
                */
            toZone(zone?: TimeZone): DateTime;
            /**
                * Convert to JavaScript date with the zone time in the getX() methods.
                * Unless the timezone is local, the Date.getUTCX() methods will NOT be correct.
                * This is because Date calculates getUTCX() from getX() applying local time zone.
                */
            toDate(): Date;
            /**
                * Add a time duration relative to UTC.
                * @return this + duration
                */
            add(duration: Duration): DateTime;
            /**
                * Add an amount of time relative to UTC, as regularly as possible.
                *
                * Adding e.g. 1 hour will increment the utcHour() field, adding 1 month
                * increments the utcMonth() field.
                * Adding an amount of units leaves lower units intact. E.g.
                * adding a month will leave the day() field untouched if possible.
                *
                * Note adding Months or Years will clamp the date to the end-of-month if
                * the start date was at the end of a month, i.e. contrary to JavaScript
                * Date#setUTCMonth() it will not overflow into the next month
                *
                * In case of DST changes, the utc time fields are still untouched but local
                * time fields may shift.
                */
            add(amount: number, unit: TimeUnit): DateTime;
            /**
                * Add an amount of time to the zone time, as regularly as possible.
                *
                * Adding e.g. 1 hour will increment the hour() field of the zone
                * date by one. In case of DST changes, the time fields may additionally
                * increase by the DST offset, if a non-existing local time would
                * be reached otherwise.
                *
                * Adding a unit of time will leave lower-unit fields intact, unless the result
                * would be a non-existing time. Then an extra DST offset is added.
                *
                * Note adding Months or Years will clamp the date to the end-of-month if
                * the start date was at the end of a month, i.e. contrary to JavaScript
                * Date#setUTCMonth() it will not overflow into the next month
                */
            addLocal(duration: Duration): DateTime;
            addLocal(amount: number, unit: TimeUnit): DateTime;
            /**
                * Same as add(-1*duration);
                */
            sub(duration: Duration): DateTime;
            /**
                * Same as add(-1*amount, unit);
                */
            sub(amount: number, unit: TimeUnit): DateTime;
            /**
                * Same as addLocal(-1*amount, unit);
                */
            subLocal(duration: Duration): DateTime;
            subLocal(amount: number, unit: TimeUnit): DateTime;
            /**
                * Time difference between two DateTimes
                * @return this - other
                */
            diff(other: DateTime): Duration;
            /**
             * Chops off the time part, yields the same date at 00:00:00.000
             * @return a new DateTime
             */
            startOfDay(): DateTime;
            /**
                * @return True iff (this < other)
                */
            lessThan(other: DateTime): boolean;
            /**
                * @return True iff (this <= other)
                */
            lessEqual(other: DateTime): boolean;
            /**
                * @return True iff this and other represent the same moment in time in UTC
                */
            equals(other: DateTime): boolean;
            /**
                * @return True iff this and other represent the same time and the same zone
                */
            identical(other: DateTime): boolean;
            /**
                * @return True iff this > other
                */
            greaterThan(other: DateTime): boolean;
            /**
                * @return True iff this >= other
                */
            greaterEqual(other: DateTime): boolean;
            /**
                * @return The minimum of this and other
                */
            min(other: DateTime): DateTime;
            /**
                * @return The maximum of this and other
                */
            max(other: DateTime): DateTime;
            /**
                * Proper ISO 8601 format string with any IANA zone converted to ISO offset
                * E.g. "2014-01-01T23:15:33+01:00" for Europe/Amsterdam
                */
            toIsoString(): string;
            /**
                * Return a string representation of the DateTime according to the
                * specified format. The format is implemented as the LDML standard
                * (http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns)
                *
                * @param formatString The format specification (e.g. "dd/MM/yyyy HH:mm:ss")
                * @return The string representation of this DateTime
                */
            format(formatString: string): string;
            /**
                * Modified ISO 8601 format string with IANA name if applicable.
                * E.g. "2014-01-01T23:15:33.000 Europe/Amsterdam"
                */
            toString(): string;
            /**
                * Used by util.inspect()
                */
            inspect(): string;
            /**
                * The valueOf() method returns the primitive value of the specified object.
                */
            valueOf(): any;
            /**
                * Modified ISO 8601 format string in UTC without time zone info
                */
            toUtcString(): string;
    }
}

declare module '__timezonecomplete/duration' {
    import basics = require("__timezonecomplete/basics");
    import TimeUnit = basics.TimeUnit;
    /**
        * Construct a time duration
        * @param n	Number of years (may be fractional or negative)
        * @return A duration of n years
        */
    export function years(n: number): Duration;
    /**
        * Construct a time duration
        * @param n	Number of months (may be fractional or negative)
        * @return A duration of n months
        */
    export function months(n: number): Duration;
    /**
        * Construct a time duration
        * @param n	Number of days (may be fractional or negative)
        * @return A duration of n days
        */
    export function days(n: number): Duration;
    /**
        * Construct a time duration
        * @param n	Number of hours (may be fractional or negative)
        * @return A duration of n hours
        */
    export function hours(n: number): Duration;
    /**
        * Construct a time duration
        * @param n	Number of minutes (may be fractional or negative)
        * @return A duration of n minutes
        */
    export function minutes(n: number): Duration;
    /**
        * Construct a time duration
        * @param n	Number of seconds (may be fractional or negative)
        * @return A duration of n seconds
        */
    export function seconds(n: number): Duration;
    /**
        * Construct a time duration
        * @param n	Number of milliseconds (may be fractional or negative)
        * @return A duration of n milliseconds
        */
    export function milliseconds(n: number): Duration;
    /**
        * Time duration which is represented as an amount and a unit e.g.
        * '1 Month' or '166 Seconds'. The unit is preserved through calculations.
        *
        * It has two sets of getter functions:
        * - second(), minute(), hour() etc, singular form: these can be used to create string representations.
        *   These return a part of your string representation. E.g. for 2500 milliseconds, the millisecond() part would be 500
        * - seconds(), minutes(), hours() etc, plural form: these return the total amount represented in the corresponding unit.
        */
    export class Duration {
            /**
                * Construct a time duration
                * @param n	Number of years (may be fractional or negative)
                * @return A duration of n years
                */
            static years(n: number): Duration;
            /**
                * Construct a time duration
                * @param n	Number of months (may be fractional or negative)
                * @return A duration of n months
                */
            static months(n: number): Duration;
            /**
                * Construct a time duration
                * @param n	Number of days (may be fractional or negative)
                * @return A duration of n days
                */
            static days(n: number): Duration;
            /**
                * Construct a time duration
                * @param n	Number of hours (may be fractional or negative)
                * @return A duration of n hours
                */
            static hours(n: number): Duration;
            /**
                * Construct a time duration
                * @param n	Number of minutes (may be fractional or negative)
                * @return A duration of n minutes
                */
            static minutes(n: number): Duration;
            /**
                * Construct a time duration
                * @param n	Number of seconds (may be fractional or negative)
                * @return A duration of n seconds
                */
            static seconds(n: number): Duration;
            /**
                * Construct a time duration
                * @param n	Number of milliseconds (may be fractional or negative)
                * @return A duration of n milliseconds
                */
            static milliseconds(n: number): Duration;
            /**
                * Construct a time duration of 0
                */
            constructor();
            /**
                * Construct a time duration from a string in one of two formats:
                * 1) [-]hhhh[:mm[:ss[.nnn]]] e.g. '-01:00:30.501'
                * 2) amount and unit e.g. '-1 days' or '1 year'. The unit may be in singular or plural form and is case-insensitive
                */
            constructor(input: string);
            /**
                * Construct a duration from an amount and a time unit.
                * @param amount	Number of units
                * @param unit	A time unit i.e. TimeUnit.Second, TimeUnit.Hour etc. Default Millisecond.
                */
            constructor(amount: number, unit?: TimeUnit);
            /**
                * @return another instance of Duration with the same value.
                */
            clone(): Duration;
            /**
                * Returns this duration expressed in different unit (positive or negative, fractional).
                * This is precise for Year <-> Month and for time-to-time conversion (i.e. Hour-or-less to Hour-or-less).
                * It is approximate for any other conversion
                */
            as(unit: TimeUnit): number;
            /**
                * Convert this duration to a Duration in another unit. You always get a clone even if you specify
                * the same unit.
                * This is precise for Year <-> Month and for time-to-time conversion (i.e. Hour-or-less to Hour-or-less).
                * It is approximate for any other conversion
                */
            convert(unit: TimeUnit): Duration;
            /**
                * The entire duration in milliseconds (negative or positive)
                * For Day/Month/Year durations, this is approximate!
                */
            milliseconds(): number;
            /**
                * The millisecond part of the duration (always positive)
                * For Day/Month/Year durations, this is approximate!
                * @return e.g. 400 for a -01:02:03.400 duration
                */
            millisecond(): number;
            /**
                * The entire duration in seconds (negative or positive, fractional)
                * For Day/Month/Year durations, this is approximate!
                * @return e.g. 1.5 for a 1500 milliseconds duration
                */
            seconds(): number;
            /**
                * The second part of the duration (always positive)
                * For Day/Month/Year durations, this is approximate!
                * @return e.g. 3 for a -01:02:03.400 duration
                */
            second(): number;
            /**
                * The entire duration in minutes (negative or positive, fractional)
                * For Day/Month/Year durations, this is approximate!
                * @return e.g. 1.5 for a 90000 milliseconds duration
                */
            minutes(): number;
            /**
                * The minute part of the duration (always positive)
                * For Day/Month/Year durations, this is approximate!
                * @return e.g. 2 for a -01:02:03.400 duration
                */
            minute(): number;
            /**
                * The entire duration in hours (negative or positive, fractional)
                * For Day/Month/Year durations, this is approximate!
                * @return e.g. 1.5 for a 5400000 milliseconds duration
                */
            hours(): number;
            /**
                * The hour part of a duration. This assumes that a day has 24 hours (which is not the case
                * during DST changes).
                */
            hour(): number;
            /**
                * DEPRECATED
                * The hour part of the duration (always positive).
                * Note that this part can exceed 23 hours, because for
                * now, we do not have a days() function
                * For Day/Month/Year durations, this is approximate!
                * @return e.g. 25 for a -25:02:03.400 duration
                */
            wholeHours(): number;
            /**
                * The entire duration in days (negative or positive, fractional)
                * This is approximate if this duration is not in days!
                */
            days(): number;
            /**
                * The day part of a duration. This assumes that a month has 30 days.
                */
            day(): number;
            /**
                * The entire duration in days (negative or positive, fractional)
                * This is approximate if this duration is not in Months or Years!
                */
            months(): number;
            /**
                * The month part of a duration.
                */
            month(): number;
            /**
                * The entire duration in years (negative or positive, fractional)
                * This is approximate if this duration is not in Months or Years!
                */
            years(): number;
            /**
                * Non-fractional positive years
                */
            wholeYears(): number;
            /**
                * Amount of units (positive or negative, fractional)
                */
            amount(): number;
            /**
                * The unit this duration was created with
                */
            unit(): TimeUnit;
            /**
                * Sign
                * @return "-" if the duration is negative
                */
            sign(): string;
            /**
                * Approximate if the durations have units that cannot be converted
                * @return True iff (this < other)
                */
            lessThan(other: Duration): boolean;
            /**
                * Approximate if the durations have units that cannot be converted
                * @return True iff (this <= other)
                */
            lessEqual(other: Duration): boolean;
            /**
                * Similar but not identical
                * Approximate if the durations have units that cannot be converted
                * @return True iff this and other represent the same time duration
                */
            equals(other: Duration): boolean;
            /**
                * Similar but not identical
                * Returns false if we cannot determine whether they are equal in all time zones
                * so e.g. 60 minutes equals 1 hour, but 24 hours do NOT equal 1 day
                *
                * @return True iff this and other represent the same time duration
                */
            equalsExact(other: Duration): boolean;
            /**
                * Same unit and same amount
                */
            identical(other: Duration): boolean;
            /**
                * Approximate if the durations have units that cannot be converted
                * @return True iff this > other
                */
            greaterThan(other: Duration): boolean;
            /**
                * Approximate if the durations have units that cannot be converted
                * @return True iff this >= other
                */
            greaterEqual(other: Duration): boolean;
            /**
                * Approximate if the durations have units that cannot be converted
                * @return The minimum (most negative) of this and other
                */
            min(other: Duration): Duration;
            /**
                * Approximate if the durations have units that cannot be converted
                * @return The maximum (most positive) of this and other
                */
            max(other: Duration): Duration;
            /**
                * Approximate if the durations have units that cannot be converted
                * Multiply with a fixed number.
                * @return a new Duration of (this * value)
                */
            multiply(value: number): Duration;
            /**
                * Approximate if the durations have units that cannot be converted
                * Divide by a fixed number.
                * @return a new Duration of (this / value)
                */
            divide(value: number): Duration;
            /**
                * Add a duration.
                * @return a new Duration of (this + value) with the unit of this duration
                */
            add(value: Duration): Duration;
            /**
                * Subtract a duration.
                * @return a new Duration of (this - value) with the unit of this duration
                */
            sub(value: Duration): Duration;
            /**
                * Return the absolute value of the duration i.e. remove the sign.
                */
            abs(): Duration;
            /**
                * DEPRECATED
                * String in [-]hhhh:mm:ss.nnn notation. All fields are
                * always present except the sign.
                */
            toFullString(): string;
            /**
                * String in [-]hhhh:mm[:ss[.nnn]] notation.
                * @param full If true, then all fields are always present except the sign. Otherwise, seconds and milliseconds
                *             are chopped off if zero
                */
            toHmsString(full?: boolean): string;
            /**
                * String in ISO 8601 notation e.g. 'P1M' for one month or 'PT1M' for one minute
                */
            toIsoString(): string;
            /**
                * String representation with amount and unit e.g. '1.5 years' or '-1 day'
                */
            toString(): string;
            /**
                * Used by util.inspect()
                */
            inspect(): string;
            /**
                * The valueOf() method returns the primitive value of the specified object.
                */
            valueOf(): any;
    }
}

declare module '__timezonecomplete/javascript' {
    /**
        * Indicates how a Date object should be interpreted.
        * Either we can take getYear(), getMonth() etc for our field
        * values, or we can take getUTCYear(), getUtcMonth() etc to do that.
        */
    export enum DateFunctions {
            /**
                * Use the Date.getFullYear(), Date.getMonth(), ... functions.
                */
            Get = 0,
            /**
                * Use the Date.getUTCFullYear(), Date.getUTCMonth(), ... functions.
                */
            GetUTC = 1,
    }
}

declare module '__timezonecomplete/period' {
    import basics = require("__timezonecomplete/basics");
    import TimeUnit = basics.TimeUnit;
    import duration = require("__timezonecomplete/duration");
    import Duration = duration.Duration;
    import datetime = require("__timezonecomplete/datetime");
    import DateTime = datetime.DateTime;
    /**
        * Specifies how the period should repeat across the day
        * during DST changes.
        */
    export enum PeriodDst {
            /**
                * Keep repeating in similar intervals measured in UTC,
                * unaffected by Daylight Saving Time.
                * E.g. a repetition of one hour will take one real hour
                * every time, even in a time zone with DST.
                * Leap seconds, leap days and month length
                * differences will still make the intervals different.
                */
            RegularIntervals = 0,
            /**
                * Ensure that the time at which the intervals occur stay
                * at the same place in the day, local time. So e.g.
                * a period of one day, starting at 8:05AM Europe/Amsterdam time
                * will always start at 8:05 Europe/Amsterdam. This means that
                * in UTC time, some intervals will be 25 hours and some
                * 23 hours during DST changes.
                * Another example: an hourly interval will be hourly in local time,
                * skipping an hour in UTC for a DST backward change.
                */
            RegularLocalTime = 1,
            /**
                * End-of-enum marker
                */
            MAX = 2,
    }
    /**
        * Convert a PeriodDst to a string: "regular intervals" or "regular local time"
        */
    export function periodDstToString(p: PeriodDst): string;
    /**
        * Repeating time period: consists of a starting point and
        * a time length. This class accounts for leap seconds and leap days.
        */
    export class Period {
            /**
                * Constructor
                * LIMITATION: if dst equals RegularLocalTime, and unit is Second, Minute or Hour,
                * then the amount must be a factor of 24. So 120 seconds is allowed while 121 seconds is not.
                * This is due to the enormous processing power required by these cases. They are not
                * implemented and you will get an assert.
                *
                * @param start The start of the period. If the period is in Months or Years, and
                *				the day is 29 or 30 or 31, the results are maximised to end-of-month.
                * @param interval	The interval of the period
                * @param dst	Specifies how to handle Daylight Saving Time. Not relevant
                *              if the time zone of the start datetime does not have DST.
                *              Defaults to RegularLocalTime.
                */
            constructor(start: DateTime, interval: Duration, dst?: PeriodDst);
            /**
                * Constructor
                * LIMITATION: if dst equals RegularLocalTime, and unit is Second, Minute or Hour,
                * then the amount must be a factor of 24. So 120 seconds is allowed while 121 seconds is not.
                * This is due to the enormous processing power required by these cases. They are not
                * implemented and you will get an assert.
                *
                * @param start The start of the period. If the period is in Months or Years, and
                *				the day is 29 or 30 or 31, the results are maximised to end-of-month.
                * @param amount	The amount of units.
                * @param unit	The unit.
                * @param dst	Specifies how to handle Daylight Saving Time. Not relevant
                *              if the time zone of the start datetime does not have DST.
                *              Defaults to RegularLocalTime.
                */
            constructor(start: DateTime, amount: number, unit: TimeUnit, dst?: PeriodDst);
            /**
                * The start date
                */
            start(): DateTime;
            /**
                * The interval
                */
            interval(): Duration;
            /**
                * DEPRECATED
                * The amount of units of the interval
                */
            amount(): number;
            /**
                * DEPRECATED
                * The unit of the interval
                */
            unit(): TimeUnit;
            /**
                * The dst handling mode
                */
            dst(): PeriodDst;
            /**
                * The first occurrence of the period greater than
                * the given date. The given date need not be at a period boundary.
                * Pre: the fromdate and startdate must either both have timezones or not
                * @param fromDate: the date after which to return the next date
                * @return the first date matching the period after fromDate, given
                *			in the same zone as the fromDate.
                */
            findFirst(fromDate: DateTime): DateTime;
            /**
                * Returns the next timestamp in the period. The given timestamp must
                * be at a period boundary, otherwise the answer is incorrect.
                * This function has MUCH better performance than findFirst.
                * Returns the datetime "count" times away from the given datetime.
                * @param prev	Boundary date. Must have a time zone (any time zone) iff the period start date has one.
                * @param count	Optional, must be >= 1 and whole.
                * @return (prev + count * period), in the same timezone as prev.
                */
            findNext(prev: DateTime, count?: number): DateTime;
            /**
                * Checks whether the given date is on a period boundary
                * (expensive!)
                */
            isBoundary(occurrence: DateTime): boolean;
            /**
                * Returns true iff this period has the same effect as the given one.
                * i.e. a period of 24 hours is equal to one of 1 day if they have the same UTC start moment
                * and same dst.
                */
            equals(other: Period): boolean;
            /**
                * Returns true iff this period was constructed with identical arguments to the other one.
                */
            identical(other: Period): boolean;
            /**
                * Returns an ISO duration string e.g.
                * 2014-01-01T12:00:00.000+01:00/P1H
                * 2014-01-01T12:00:00.000+01:00/PT1M   (one minute)
                * 2014-01-01T12:00:00.000+01:00/P1M   (one month)
                */
            toIsoString(): string;
            /**
                * A string representation e.g.
                * "10 years, starting at 2014-03-01T12:00:00 Europe/Amsterdam, keeping regular intervals".
                */
            toString(): string;
            /**
                * Used by util.inspect()
                */
            inspect(): string;
    }
}

declare module '__timezonecomplete/timesource' {
    /**
        * For testing purposes, we often need to manipulate what the current
        * time is. This is an interface for a custom time source object
        * so in tests you can use a custom time source.
        */
    export interface TimeSource {
            /**
                * Return the current date+time as a javascript Date object
                */
            now(): Date;
    }
    /**
        * Default time source, returns actual time
        */
    export class RealTimeSource implements TimeSource {
            now(): Date;
    }
}

declare module '__timezonecomplete/timezone' {
    import javascript = require("__timezonecomplete/javascript");
    import DateFunctions = javascript.DateFunctions;
    /**
        * The local time zone for a given date as per OS settings. Note that time zones are cached
        * so you don't necessarily get a new object each time.
        */
    export function local(): TimeZone;
    /**
        * Coordinated Universal Time zone. Note that time zones are cached
        * so you don't necessarily get a new object each time.
        */
    export function utc(): TimeZone;
    /**
        * @param offset offset w.r.t. UTC in minutes, e.g. 90 for +01:30. Note that time zones are cached
        * so you don't necessarily get a new object each time.
        * @returns a time zone with the given fixed offset
        */
    export function zone(offset: number): TimeZone;
    /**
        * Time zone for an offset string or an IANA time zone string. Note that time zones are cached
        * so you don't necessarily get a new object each time.
        * @param s Empty string for no time zone (null is returned),
        *          "localtime" for local time,
        *          a TZ database time zone name (e.g. Europe/Amsterdam),
        *          or an offset string (either +01:30, +0130, +01, Z). For a full list of names, see:
        *          https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        * @param dst	Optional, default true: adhere to Daylight Saving Time if applicable. Note for
        *              "localtime", timezonecomplete will adhere to the computer settings, the DST flag
        *              does not have any effect.
        */
    export function zone(name: string, dst?: boolean): TimeZone;
    /**
        * The type of time zone
        */
    export enum TimeZoneKind {
            /**
                * Local time offset as determined by JavaScript Date class.
                */
            Local = 0,
            /**
                * Fixed offset from UTC, without DST.
                */
            Offset = 1,
            /**
                * IANA timezone managed through Olsen TZ database. Includes
                * DST if applicable.
                */
            Proper = 2,
    }
    /**
        * Option for TimeZone#normalizeLocal()
        */
    export enum NormalizeOption {
            /**
                * Normalize non-existing times by ADDING the DST offset
                */
            Up = 0,
            /**
                * Normalize non-existing times by SUBTRACTING the DST offset
                */
            Down = 1,
    }
    /**
        * Time zone. The object is immutable because it is cached:
        * requesting a time zone twice yields the very same object.
        * Note that we use time zone offsets inverted w.r.t. JavaScript Date.getTimezoneOffset(),
        * i.e. offset 90 means +01:30.
        *
        * Time zones come in three flavors: the local time zone, as calculated by JavaScript Date,
        * a fixed offset ("+01:30") without DST, or a IANA timezone ("Europe/Amsterdam") with DST
        * applied depending on the time zone rules.
        */
    export class TimeZone {
            /**
                * The local time zone for a given date. Note that
                * the time zone varies with the date: amsterdam time for
                * 2014-01-01 is +01:00 and amsterdam time for 2014-07-01 is +02:00
                */
            static local(): TimeZone;
            /**
                * The UTC time zone.
                */
            static utc(): TimeZone;
            /**
                * Time zone with a fixed offset
                * @param offset	offset w.r.t. UTC in minutes, e.g. 90 for +01:30
                */
            static zone(offset: number): TimeZone;
            /**
                * Time zone for an offset string or an IANA time zone string. Note that time zones are cached
                * so you don't necessarily get a new object each time.
                * @param s Empty string for no time zone (null is returned),
                *          "localtime" for local time,
                *          a TZ database time zone name (e.g. Europe/Amsterdam),
                *          or an offset string (either +01:30, +0130, +01, Z). For a full list of names, see:
                *          https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
                *          TZ database zone name may be suffixed with " without DST" to indicate no DST should be applied.
                *          In that case, the dst parameter is ignored.
                * @param dst	Optional, default true: adhere to Daylight Saving Time if applicable. Note for
                *              "localtime", timezonecomplete will adhere to the computer settings, the DST flag
                *              does not have any effect.
                */
            static zone(s: string, dst?: boolean): TimeZone;
            /**
                * Do not use this constructor, use the static
                * TimeZone.zone() method instead.
                * @param name NORMALIZED name, assumed to be correct
                * @param dst	Adhere to Daylight Saving Time if applicable, ignored for local time and fixed offsets
                */
            constructor(name: string, dst?: boolean);
            /**
                * The time zone identifier. Can be an offset "-01:30" or an
                * IANA time zone name "Europe/Amsterdam", or "localtime" for
                * the local time zone.
                */
            name(): string;
            dst(): boolean;
            /**
                * The kind of time zone (Local/Offset/Proper)
                */
            kind(): TimeZoneKind;
            /**
                * Equality operator. Maps zero offsets and different names for UTC onto
                * each other. Other time zones are not mapped onto each other.
                */
            equals(other: TimeZone): boolean;
            /**
                * Returns true iff the constructor arguments were identical, so UTC !== GMT
                */
            identical(other: TimeZone): boolean;
            /**
                * Is this zone equivalent to UTC?
                */
            isUtc(): boolean;
            /**
                * Does this zone have Daylight Saving Time at all?
                */
            hasDst(): boolean;
            /**
                * Calculate timezone offset from a UTC time.
                *
                * @param year Full year
                * @param month Month 1-12 (note this deviates from JavaScript date)
                * @param day Day of month 1-31
                * @param hour Hour 0-23
                * @param minute Minute 0-59
                * @param second Second 0-59
                * @param millisecond Millisecond 0-999
                *
                * @return the offset of this time zone with respect to UTC at the given time, in minutes.
                */
            offsetForUtc(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number): number;
            /**
                * Calculate timezone offset from a zone-local time (NOT a UTC time).
                * @param year local full year
                * @param month local month 1-12 (note this deviates from JavaScript date)
                * @param day local day of month 1-31
                * @param hour local hour 0-23
                * @param minute local minute 0-59
                * @param second local second 0-59
                * @param millisecond local millisecond 0-999
                * @return the offset of this time zone with respect to UTC at the given time, in minutes.
                */
            offsetForZone(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number): number;
            /**
                * Note: will be removed in version 2.0.0
                *
                * Convenience function, takes values from a Javascript Date
                * Calls offsetForUtc() with the contents of the date
                *
                * @param date: the date
                * @param funcs: the set of functions to use: get() or getUTC()
                */
            offsetForUtcDate(date: Date, funcs: DateFunctions): number;
            /**
                * Note: will be removed in version 2.0.0
                *
                * Convenience function, takes values from a Javascript Date
                * Calls offsetForUtc() with the contents of the date
                *
                * @param date: the date
                * @param funcs: the set of functions to use: get() or getUTC()
                */
            offsetForZoneDate(date: Date, funcs: DateFunctions): number;
            /**
                * Zone abbreviation at given UTC timestamp e.g. CEST for Central European Summer Time.
                *
                * @param year Full year
                * @param month Month 1-12 (note this deviates from JavaScript date)
                * @param day Day of month 1-31
                * @param hour Hour 0-23
                * @param minute Minute 0-59
                * @param second Second 0-59
                * @param millisecond Millisecond 0-999
                * @param dstDependent (default true) set to false for a DST-agnostic abbreviation
                *
                * @return "local" for local timezone, the offset for an offset zone, or the abbreviation for a proper zone.
                */
            abbreviationForUtc(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number, dstDependent?: boolean): string;
            /**
                * Normalizes non-existing local times by adding a forward offset change.
                * During a forward standard offset change or DST offset change, some amount of
                * local time is skipped. Therefore, this amount of local time does not exist.
                * This function adds the amount of forward change to any non-existing time. After all,
                * this is probably what the user meant.
                *
                * @param localUnixMillis	Unix timestamp in zone time
                * @param opt	(optional) Round up or down? Default: up
                *
                * @returns	Unix timestamp in zone time, normalized.
                */
            normalizeZoneTime(localUnixMillis: number, opt?: NormalizeOption): number;
            /**
                * The time zone identifier (normalized).
                * Either "localtime", IANA name, or "+hh:mm" offset.
                */
            toString(): string;
            /**
                * Used by util.inspect()
                */
            inspect(): string;
            /**
                * Convert an offset number into an offset string
                * @param offset The offset in minutes from UTC e.g. 90 minutes
                * @return the offset in ISO notation "+01:30" for +90 minutes
                */
            static offsetToString(offset: number): string;
            /**
                * String to offset conversion.
                * @param s	Formats: "-01:00", "-0100", "-01", "Z"
                * @return offset w.r.t. UTC in minutes
                */
            static stringToOffset(s: string): number;
    }
}

declare module '__timezonecomplete/globals' {
    import datetime = require("__timezonecomplete/datetime");
    import DateTime = datetime.DateTime;
    import duration = require("__timezonecomplete/duration");
    import Duration = duration.Duration;
    /**
        * Returns the minimum of two DateTimes
        */
    export function min(d1: DateTime, d2: DateTime): DateTime;
    /**
        * Returns the minimum of two Durations
        */
    export function min(d1: Duration, d2: Duration): Duration;
    /**
        * Returns the maximum of two DateTimes
        */
    export function max(d1: DateTime, d2: DateTime): DateTime;
    /**
        * Returns the maximum of two Durations
        */
    export function max(d1: Duration, d2: Duration): Duration;
    /**
        * Returns the absolute value of a Duration
        */
    export function abs(d: Duration): Duration;
}
