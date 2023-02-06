import { useState } from "react";
import { tokens } from "../../theme";
import {
  useTheme,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Header from "../../components/Header";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from  "@fullcalendar/timegrid";
import dayGridPlugin from  "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"


const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ currentEvents, setCurrentEvents ] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });  // end addEvent

    }  // end if title
  };  // end handleDateClick

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want delete the event: '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };  // end handleEventClick

  return(
    <Box m="20px">
      <Header title="Calendar" subTitle="Advanced Calendar Application"/>
      <Box display="flex" justifyContent="space-between">
        {/* ---- CALENDAR SIDEBAR ---- */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          {/* ---- LIST OF EVENTS ---- */}
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map(
              (event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {
                          formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            }
                          )  // end formatDate
                        }
                      </Typography>
                    }
                  />
                </ListItem>
              )  // end anon func IIAS block - map
            )}
          </List>
        </Box>
        {/* ---- CALENDAR ---- */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={ (events) => setCurrentEvents(events) }
            initialEvents={[
              { id: "1234", title: "Company Luncheon", date: "2023-02-09" },
              { id: "4321", title: "Launch Planning", start: "2023-02-07T10:30:00", end: "2023-02-07T11:00:00" },
              { id: "4322", title: "Marketing Status", start: "2023-02-07T08:30:00", end: "2023-02-07T11:00:00" },
              { id: "5576", title: "Knowledge Transfer", start: "2023-02-15T09:00:00", end: "2023-02-15T11:00:00" },
              { id: "6443", title: "React Meetup", date: "2023-02-27" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;


// See https://fullcalendar.io/docs

