import { useEffect, useState } from "react";
import moment from "jalali-moment";
import Flex from "../ui/Flex";
import Button from "../ui/Button";
import Text from "../ui/Text";
import Icon from "../ui/Icon";
import useBoards from "../../hooks/useBoards";
import TaskCol from "./Task";

export interface CalendarProps {
  // boards: BoardResponse[];
  projectId: number;
  workspaceId: number;
}

const daysOfWeek = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];
const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const convertToPersian = (number: number | string) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(number).replace(
    /\d/g,
    (match) => persianNumbers[parseInt(match)]
  );
};

const PersianCalendar = ({ projectId, workspaceId }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [todayDate, setTodayDate] = useState(moment());
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const { error, getBoards, boards } = useBoards();

  useEffect(() => {
    if (workspaceId && projectId) {
      getBoards(workspaceId, projectId);
    }
  }, [workspaceId]);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "jMonth"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "jMonth"));
  };

  const handleToday = () => {
    setCurrentDate(todayDate);
  };

  const handleClick = (day: number) => {
    setSelectedDay(day);
    setModalOpen(true);
  };

  const daysInMonth = () => {
    const firstDayOfMonth = currentDate.clone().startOf("jMonth");
    const days: (number | string)[] = [];
    for (let i = 0; i < firstDayOfMonth.jDay(); i++) {
      days.push("");
    }
    for (let i = 1; i <= currentDate.jDaysInMonth(); i++) {
      days.push(i);
    }
    while (days.length % 7 !== 0) {
      days.push("");
    }

    return days;
  };

  const isToday = (day: number) => {
    return (
      todayDate.jYear() === currentDate.jYear() &&
      todayDate.jMonth() === currentDate.jMonth() &&
      todayDate.jDate() === day
    );
  };

  const formatJalaliDate = (day: number) => {
    return currentDate.clone().date(day).format("jYYYY/jMM/jDD");
  };

  return (
    <div>
      <div className="w-[1033px] h-auto bg-white">
        {/* Header */}
        <Flex className="w-full border-b">
          <Button
            onClick={handleToday}
            weight="400"
            className="font-iranyekan bg-white text-black text-sm p-3"
          >
            <Text className="bg-red">امروز</Text>
          </Button>

          <Button onClick={handlePrevMonth} asChild>
            <Icon iconName="ChevronRight" />
          </Button>
          <Button onClick={handleNextMonth} asChild>
            <Icon iconName="ChevronLeft" />
          </Button>

          <Text
            weight="400"
            className="font-iranyekan bg-white text-black text-sm p-3"
          >
            {months[currentDate.jMonth()]}{" "}
            {convertToPersian(currentDate.jYear())}
          </Text>
        </Flex>

        {/* Body */}
        <Flex className="h-full">
          <div className="grid w-full gap-3 grid-cols-7">
            {/* Days of Week */}
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="text-center font-medium text-gray-500"
              >
                {day}
              </div>
            ))}

            {/* Days of Month */}
            {daysInMonth().map((day, index) => (
              <div
                key={index}
                className={`w-full h-[100px] flex border ${
                  day === "" ? "text-gray-400" : "text-gray-900"
                } ${isToday(day as number) ? "border border-[#208D8E]" : ""}`}
              >
                {day !== "" && (
                  <div className="flex flex-col">
                    <button
                      className="w-[30px] h-[20px]"
                      onClick={() => handleClick(day as number)}
                    >
                      {convertToPersian(day)}

                      {error ? (
                        <div>Error: {error.message}</div>
                      ) : (
                        boards.map((board) => (
                          <ul key={board.id} id={board.id.toString()}>
                            <TaskCol
                              date={formatJalaliDate(day as number)}
                              boardId={board.id}
                              projectId={projectId}
                              workspaceId={workspaceId}
                            />
                          </ul>
                        ))
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default PersianCalendar;
