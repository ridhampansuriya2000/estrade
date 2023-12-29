import React, {useCallback} from 'react';
import {Calendar as BigCalendar, momentLocalizer} from "react-big-calendar";
import { Box, Typography} from "@mui/material";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css'


const localizer = momentLocalizer(moment);
const Calendar = () => {
    const currentDate = new Date();
    const dayFormat = (date, culture, localizer) => localizer.format(date, 'dddd', culture);

    const dayPropGetter = useCallback(
        (date, props) => {

            // this is for day task
            const formatDetail = 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ';
            // const currentDate = moment(date);
            const dt = moment(date, formatDetail).format('YYYY-MM-DD'); //2023-05-26

            const momentObj = moment(dt).format('dddd');

            //start for first and third saturday
            const today = moment(date);
            const todayClone = today.clone().startOf('month')
            const firstSaturday = moment(todayClone.day(6), formatDetail).format('YYYY-MM-DD')
            const thirdSaturday = moment(todayClone.day(6 + 14), formatDetail).format('YYYY-MM-DD')
            //end for first and third saturday


            // const find = [].concat(loginUser?.calendarEvent ? loginUser?.calendarEvent : [], organization?.calendarEvent ? organization?.calendarEvent : []).map((value) => {
            //     let fdDate
            //     if (value.eventType == 'day') {
            //         const startDate1 = moment(value.start, formatDetail).format('YYYY-MM-DD')
            //         const endDate1 = moment(value.end, formatDetail).format('YYYY-MM-DD')
            //         if ((moment(startDate1, 'YYYY-MM-DD').isBefore(moment(dt, 'YYYY-MM-DD')) || startDate1 == dt) && moment(dt, 'YYYY-MM-DD').isBefore(moment(endDate1, 'YYYY-MM-DD'))) {
            //             fdDate = dt
            //         }
            //     }
            //     return fdDate;
            // }).filter((value) => value !== undefined)

            // if (firstSaturday == dt) {
            //     return ({
            //         style: {
            //             backgroundColor: '#1cce7526',
            //             color: '#00000085',
            //         },
            //     })
            // }
            //
            // if (thirdSaturday == dt) {
            //     return ({
            //         style: {
            //             backgroundColor: '#1cce7526',
            //             color: '#00000085',
            //         },
            //     })
            // }

            // if (momentObj === 'Sunday') {
            //     return ({
            //         style: {
            //             backgroundColor: '#1cce7526',
            //             color: '#00000085',
            //         },
            //     })
            // }

            return ({
                style: {
                    // height: 'auto',
                    backgroundColor: moment(date).isSame(moment(), 'month') ? 'transparent' : 'transparent', // Adjust colors as needed
                }
            })
        },
        []
    );

    const eventColors = (event, start, end, isSelected) => {
        // this is for only task event
        if (event?.eventType == 'day') {
            var style = {
                backgroundColor: event.color,
                borderRadius: '6px',
                opacity: 0.8,
                color: 'black',
                border: '0px',
                display: 'block',
                fontWeight: '800',
                fontSize: '1rem',
                lineHeight: '1',
                fontFamily: 'SFProRounded',
                textAlign: 'center',
                // borderLeft: '4px solid #00000052',
                marginBottom: '2px'
            };
            return {
                style: style
            };
        } else {
            var style = {
                backgroundColor: '#eff4fb',
                borderRadius: '0.125rem',
                // opacity: 0.8,
                color: 'black',
                // border: '0px',
                display: 'block',
                fontWeight: '400',
                fontSize: '0.85rem',
                lineHeight: '1',
                fontFamily: 'SFProRounded',
                borderLeft: '3px solid #3c50e0',
                marginBottom: '2px'
            };
            return {
                style: style
            };
        }
    };

    const getSlotColor = (date, resourceId) => {

        if (moment().isSame(date, 'hour')) {
            // return {
            //     className: 'current-hour-slot',
            //     style: {
            //         backgroundColor: 'lightblue',
            //     },
            // };
        }
        return {};
    };
    const CustomHeader = ({label}) => {
        const fullDate = moment().day(label).format("dddd");

        return (<> <Typography sx={{display: {md: 'block', xs: 'none'}}}>{fullDate}</Typography>
            <Typography sx={{display: {xs: 'block', md: 'none'}, fontSize: '0.75rem', lineHeight: '1rem'}}>{label}</Typography>
        </>);
    };

    return (
        <>
            <BigCalendar
                events={[
                    {
                        "id": 1,
                        "title": "Team Meeting",
                        "category": 'Profit',
                        "revenue": '$45,22.2k',
                        "start": "2023-12-01T09:00:00",
                        "end": "2023-12-01T10:30:00"
                    },
                    {
                        "id": 2,
                        "title": "Project Kickoff",
                        "category": 'Loss',
                        "revenue": '$754,45k',
                        "start": "2023-12-02T11:00:00",
                        "end": "2023-12-02T12:30:00"
                    },
                    {
                        "id": 3,
                        "title": "Client Presentation",
                        "category": 'Loss',
                        "revenue": '$312,45k',
                        "start": "2023-12-03T14:00:00",
                        "end": "2023-12-03T16:00:00"
                    },
                    {
                        "id": 4,
                        "title": "Team Building",
                        "category": 'Loss',
                        "revenue": '$834,45k',
                        "start": "2023-12-04T09:00:00",
                        "end": "2023-12-04T17:00:00"
                    },
                    {
                        "id": 5,
                        "title": "Team Workshop",
                        "category": 'Profit',
                        "revenue": '$322.2k',
                        "start": "2023-12-05T10:00:00",
                        "end": "2023-12-05T12:00:00"
                    },
                    {
                        "id": 6,
                        "title": "Team Building",
                        "category": 'Profit',
                        "revenue": '$522.2k',

                        "start": "2023-12-06T10:00:00",
                        "end": "2023-12-06T12:00:00"
                    },
                    {
                        "id": 7,
                        "title": "Project Review",
                        "category": 'Loss',
                        "revenue": '$334,45k',
                        "start": "2023-12-07T15:00:00",
                        "end": "2023-12-07T16:30:00"
                    },
                    {
                        "id": 8,
                        "title": "Team Building",
                        "category": 'Loss',
                        "revenue": '$34,45k',
                        "start": "2023-12-08T09:00:00",
                        "end": "2023-12-08T17:00:00"
                    },
                    {
                        "id": 9,
                        "title": "Internal Training",
                        "category": 'Loss',
                        "revenue": '$34,45k',
                        "start": "2023-12-09T13:30:00",
                        "end": "2023-12-09T15:00:00"
                    },
                    {
                        "id": 10,
                        "title": "Product Demo",
                        "category": 'Profit',
                        "revenue": '$522.2k',
                        "start": "2023-12-10T14:30:00",
                        "end": "2023-12-10T16:00:00"
                    },
                    {
                        "id": 11,
                        "title": "Team Building",
                        "category": 'Profit',
                        "revenue": '$222.2k',
                        "start": "2023-12-11T09:00:00",
                        "end": "2023-12-11T17:00:00"
                    }
                ]}
                localizer={localizer}
                views={{
                    month: true,
                    week: false,
                    day: false,
                    agenda: false,
                }}
                timeslots={1}
                defaultView="month"
                defaultDate={currentDate}
                dayPropGetter={dayPropGetter}
                eventPropGetter={eventColors}
                slotPropGetter={getSlotColor}
                dayFormat="dddd"
                dayHeaderFormat={dayFormat}
                className="dashboard-calendar"
                components={{
                    header: CustomHeader,
                    toolbar: () => null,
                    eventWrapper: ({event, children}) => {
                        console.log("children", children, "event", event)
                        return (<Box sx={{
                            backgroundColor: '#eff4fb',
                            borderRadius: '0.125rem',
                            color: event.category == 'Profit' ? '#008000' : '#ff0000',
                            display: 'block',
                            fontWeight: '400',
                            fontSize: '0.85rem',
                            lineHeight: '1',
                            fontFamily: 'SFProRounded',
                            borderLeft: '3px solid #3c50e0',
                            marginBottom: '2px',
                            ml: {lg: 1, md: 1, sm: 0.5, xs: 0},
                            pl: {lg: 1, md: 1, sm: 0.5, xs: 0},
                            pr: {lg: 6, md: 4, sm: 1, xs: 0},
                            pt: 2,
                        }}>
                            <Typography sx={{fontWeight: '600', fontSize: {md: '1rem', xs: '0.8rem'}}}>{event.category}</Typography>
                            <Typography sx={{fontWeight: '400', fontSize: {md: '1rem', xs: '0.6rem'}}}>{event.revenue}</Typography>
                        </Box>)
                    }
                }}
            />
        </>
    );
};

export default Calendar;
