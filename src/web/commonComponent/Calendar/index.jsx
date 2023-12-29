import React, {useCallback} from 'react';
import {Calendar as BigCalendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import {Typography} from "@mui/material";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css'


const localizer = momentLocalizer(moment);
const Calendar = () => {
    const currentDate = new Date();
    const dayFormat = (date, culture, localizer) => localizer.format(date, 'dddd', culture);

    const dayPropGetter = useCallback(
        (date,props) => {

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

            return ({ style: {

                    backgroundColor: moment(date).isSame(moment(), 'month') ? 'transparent' : 'transparent', // Adjust colors as needed
                }})
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
                // backgroundColor: event.color,
                borderRadius: '4px',
                opacity: 0.8,
                color: 'black',
                // border: '0px',
                display: 'block',
                fontWeight: '400',
                fontSize: '0.85rem',
                lineHeight: '1',
                fontFamily: 'SFProRounded',
                borderLeft: '4px solid #00000052',
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
                // selectable
                events={[]}
                localizer={localizer}
                views={{
                    month: true,
                    week: false,
                    day: false,
                    agenda: false,
                }}
                timeslots={1}
                defaultView="month"
                // startAccessor="start"
                // endAccessor="end"
                defaultDate={currentDate}
                // onSelectEvent={event => handleEventSelected(event)}
                // onSelectSlot={slotInfo => handleSlotSelected(slotInfo)}
                dayPropGetter={dayPropGetter}
                // style={{height: 600}}
                eventPropGetter={eventColors}
                slotPropGetter={getSlotColor}
                // style={{ header: { border: 'none' } }}
                dayFormat="dddd"
                dayHeaderFormat={dayFormat}
                className="dashboard-calendar"
                components={{
                    header: CustomHeader,
                    toolbar: () => null,
                    // dateCellWrapper: ColoredDateCellWrapper,
                    // event: Events,
                    // event: props => (
                    //     <div
                    //         {...props}
                    //         onMouseOver={e => handleEventMouseOver(props.event, e, props)}
                    //         // style={{
                    //         //     ...props.style,
                    //         //     backgroundColor: 'blue',
                    //         //     borderRadius: '5px',
                    //         //     padding: '10px',
                    //         //     border: '0',
                    //         //     fontSize: '14px',
                    //         //     fontFamily: 'Arial',
                    //         //     color: 'white',
                    //         //     cursor: 'pointer',
                    //         // }}
                    //     >
                    //         {props.event.title}
                    //     </div>
                    // ),
                }}
            />
        </>
    );
};

export default Calendar;
