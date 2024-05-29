import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import TitleForm from "../Modal/calendarmodal.tsx";
import styles from "./styles.module.css";
import { BoardResponse } from "../../services/board-service.ts";

export interface CalendarProps {
  projectId: number;
  workspaceId: number;
  boards: BoardResponse[];
  // getBoards: any;
}

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (selected: React.SetStateAction<null>) => {
    setSelectedDate(selected);
    setModalOpen(true);
  };

  const handleTitleSubmit = (title: string) => {
    if (selectedDate) {
      const { dateStr, startStr, endStr, allDay } = selectedDate;
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();

      if (title) {
        calendarApi.addEvent({
          id: `${dateStr}-${title}`,
          title,
          start: startStr,
          end: endStr,
          allDay,
        });
      }
    }

    setSelectedDate(null);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
    setModalOpen(false);
  };

  const customButtons = {
    customTodayButton: {
      text: "امروز",
      click: function () {
        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          if (calendarApi) {
            calendarApi.today();
          }
        }
      },
    },
  };

  const calendarRef = React.useRef<FullCalendar>(null);

  return (
    <div className="h-[779px] w-[1033]">
      <FullCalendar
        ref={calendarRef}
        locale="fa"
        direction="rtl"
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          center: "customTodayButton,prev,next",
          right: "",
        }}
        customButtons={customButtons}
        firstDay={6}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        select={handleDateClick}
        eventsSet={(events) => setCurrentEvents(events)}
      />

      {isModalOpen && (
        <div className={styles["modal"]}>
          <TitleForm
            onTitleSubmit={handleTitleSubmit}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
