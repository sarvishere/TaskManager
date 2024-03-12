import { useState } from "react";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Text from "../ui/Text";
import moment from "jalali-moment";

interface DatePickerCardProps {
  onSelectStartDate: (date: string) => void;
  onSelectFinishDate: (date: string) => void;
  onClose: () => void;
  visible: boolean;
}

const totalDaysInCalendar = 37;
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

const GregorianOutput = "YYYY-MM-DD";

const monthAndDayFormat = (date: moment.Moment): string =>
  `${convertToPersian(date.jDate())} ${months[date.jMonth()]}`;

const DatePickerCard: React.FC<DatePickerCardProps> = ({
  onSelectFinishDate,
  onSelectStartDate,
  onClose,
  visible,
}) => {
  const [selectedFinishDate, setSelectedFinishDate] = useState<moment.Moment>();
  const [selectedStartDate, setSelectedStartDate] = useState<moment.Moment>();
  const [currentDate, setCurrentDate] = useState<moment.Moment>(moment());

  const today = moment();

  const handlePrevMonth = () => {
    setCurrentDate(currentDate?.clone().subtract(1, "jMonth"));
  };
  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "jMonth"));
  };
  const handleDateChange = (date: moment.Moment) => {
    if (!selectedStartDate) {
      if (
        !date.isBefore(today, "day") &&
        (!selectedFinishDate || !date.isAfter(selectedFinishDate))
      ) {
        setSelectedStartDate(date);
        onSelectStartDate(moment(date, GregorianOutput).toISOString());
      }
    } else if (!selectedFinishDate) {
      if (date.isAfter(selectedStartDate)) {
        setSelectedFinishDate(date);
        onSelectFinishDate(date.clone().format(GregorianOutput));
      }
    } else {
      if (date.isSame(selectedFinishDate, "day")) {
        setSelectedFinishDate(undefined);
      } else if (date.isSame(selectedStartDate, "day")) {
        setSelectedStartDate(undefined);
      }
    }
  };

  const handleStartDateChange = (date: moment.Moment) => {
    if (!selectedFinishDate || date.isBefore(selectedFinishDate, "day")) {
      setSelectedStartDate(date.clone());
      const formattedDate = moment(date, GregorianOutput).toISOString();
      onSelectStartDate(formattedDate);
    }
  };

  if (!visible) return null;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      className="fixed inset-0 w-screen h-screen backdrop-blur-sm"
    >
      <div className="w-[936px] bg-white overflow-hidden h-[632px] rounded-[20px] shadow-[0_12px_32px_0_rgba(0,0,0,0.25)] ">
        <header className="flex gap-2 justify-between w-[896-px] p-10 border-b">
          <Flex alignItems="center">
            <Icon iconName="DatePickerCalendar" width={32} height={32} />
            <Text size="XL" weight="500">
              زمان شروع
            </Text>
            <Text weight="500" size="XL" color="brand">
              {selectedStartDate && monthAndDayFormat(selectedStartDate)}
            </Text>
          </Flex>

          <Flex alignItems="center" className=" border-r pr-2">
            <Icon iconName="DatePickerCalendar" width={32} height={32} />
            <Text size="XL" weight="500">
              زمان پایان
            </Text>
            <Text weight="500" size="XL" color="brand">
              {selectedFinishDate && monthAndDayFormat(selectedFinishDate)}
            </Text>
          </Flex>
        </header>

        {/*  Body  */}
        <Flex className="h-full">
          {/* Start Time Section */}
          <div className=" flex flex-col gap-3 h-full w-[393px] bg-[#F7F8F9] p-6">
            <TimeDeltaButtons onChange={handleStartDateChange} />
          </div>

          {/* Finish Time Section */}
          <div className="grid w-full justify-items-center gap-3 p-7 grid-cols-7">
            <Flex
              className="w-[202px] gap-5 my-5 justify-self-start col-span-7"
              alignItems="center"
            >
              <Text
                weight="500"
                size="L"
                className="flex w-24 whitespace-nowrap items-center"
              >
                {months[currentDate.jMonth()]}{" "}
                {convertToPersian(currentDate.jYear())}
              </Text>

              {/* Month Navigation Buttons */}
              <Flex width="w-fit">
                <Button onClick={handlePrevMonth} asChild>
                  <Icon iconName="ChevronRight" />
                </Button>
                <Button onClick={handleNextMonth} asChild>
                  <Icon iconName="ChevronLeft" />
                </Button>
              </Flex>

              <Text weight="500" size="L">
                {currentDate.isSame(today, "day")
                  ? "امروز"
                  : convertToPersian(currentDate.jDate())}
              </Text>
            </Flex>

            {/* Rendering days of week */}
            <DaysOfWeek days={daysOfWeek} />

            {/* Rendering days of month */}
            <CalendarDays
              currentDate={currentDate}
              selectedFinishDate={selectedFinishDate}
              selectedStartDate={selectedStartDate}
              onDateChange={handleDateChange}
            />

            <Button
              weight="400"
              className=" text-xs w-[125px] justify-self-end col-span-7"
              color="brand"
              onClick={onClose}
            >
              بستن
            </Button>
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

const TimeDeltaButtons: React.FC<{
  onChange: (date: moment.Moment) => void;
}> = ({ onChange }) => {
  const currentStartDate = moment();

  const timeDelta: {
    [index: string]: {
      label: string;
      value: string;
      date: moment.Moment;
    };
  } = {
    today: {
      label: "امروز",
      value: daysOfWeek[currentStartDate.jDay()],
      date: currentStartDate,
    },
    inAFewMinutes: {
      label: "کمی بعد",
      value: convertToPersian(moment().add(30, "minutes").format("HH:mm")),
      date: moment().add(30, "minutes"),
    },
    tomorrow: {
      label: "فردا",
      value: daysOfWeek[currentStartDate.clone().add(1, "day").jDay()],
      date: currentStartDate.clone().add(1, "day"),
    },
    weekend: {
      label: "این آخر هفته",
      value: daysOfWeek[currentStartDate.clone().endOf("jDay").day(5).jDay()],
      date: currentStartDate.clone().endOf("jDay").day(5),
    },
    nextWeek: {
      label: "هفته‌ی آینده",
      value: daysOfWeek[currentStartDate.clone().add(1, "week").jDay()],
      date: currentStartDate.clone().add(1, "week"),
    },
    endOfNextWeek: {
      label: "آخرهفته‌ی آینده",
      value: monthAndDayFormat(
        currentStartDate.clone().endOf("jDay").add(1, "week").day(5)
      ),
      date: currentStartDate.clone().add(1, "week").day(5),
    },
    twoWeeksLater: {
      label: "دو هفته دیگر",
      value: monthAndDayFormat(currentStartDate.clone().add(2, "week")),
      date: currentStartDate.clone().add(2, "week"),
    },
    fourWeeksLater: {
      label: "۴ هفته دیگر",
      value: monthAndDayFormat(currentStartDate.clone().add(4, "week")),
      date: currentStartDate.clone().add(4, "week"),
    },
  };

  return (
    <>
      {Object.keys(timeDelta).map((k) => (
        <Button
          key={k}
          onClick={() => onChange(timeDelta[k].date)}
          asChild
          className="w-full"
        >
          <Flex
            justifyContent="between"
            className="hover:bg-slate-200 hover:rounded-md transition-colors duration-200 p-2"
          >
            <Text weight="500" size="L">
              {timeDelta[k].label}
            </Text>
            <Text size="M" weight="500" color="gray">
              {timeDelta[k].value}
            </Text>
          </Flex>
        </Button>
      ))}
    </>
  );
};

const DaysOfWeek: React.FC<{ days: string[] }> = ({ days }) => {
  return (
    <>
      {days.map((d) => (
        <Text key={d} size="M" weight="500" color="gray">
          {d}
        </Text>
      ))}
    </>
  );
};

const CalendarDays: React.FC<{
  selectedStartDate: moment.Moment | undefined;
  selectedFinishDate: moment.Moment | undefined;
  currentDate: moment.Moment;
  onDateChange: (date: moment.Moment) => void;
}> = ({ onDateChange, selectedFinishDate, selectedStartDate, currentDate }) => {
  const startOfMonth = currentDate.clone().startOf("jMonth");
  const endOfMonth = currentDate.clone().endOf("jMonth");
  const today = moment();

  const days: moment.Moment[] = [];

  for (let i = 0; i < startOfMonth.jDay(); i++)
    days.unshift(startOfMonth.clone().subtract(i + 1, "day"));

  for (let i = 0; i <= endOfMonth.jDate() - startOfMonth.jDate(); i++)
    days.push(startOfMonth.clone().add(i, "day"));

  for (let i = 0; days.length < totalDaysInCalendar; i++)
    days.push(endOfMonth.clone().add(i + 1, "day"));

  return (
    <>
      {days.map((d) => {
        let isInRange;
        if (selectedFinishDate && selectedStartDate) {
          isInRange = d.isBetween(
            selectedStartDate?.clone().add(1, "day"),
            selectedFinishDate?.clone().subtract(1, "day"),
            "day",
            "[]"
          );
        }

        return (
          <Button
            className={`${
              isInRange
                ? " relative z-10 before:absolute before:bg-[#E3FDFB] before:-left-14 before:-right-14 before:-z-30 before:top-0 before:bottom-0 before:content-[''] flex justify-center items-center"
                : ""
            }`}
            key={`${d.jMonth()}-${d.jDate()}`}
            asChild
            onClick={() => onDateChange(d.clone())}
          >
            <Text
              size="L"
              weight="500"
              className={`relative z-20 py-[5px] px-[10px] flex justify-center items-center 
        ${
          d.isSame(today, "day") &&
          !d.isSame(selectedStartDate) &&
          !d.isSame(selectedFinishDate)
            ? " border w-[44px] h-[44px] border-brand-primary rounded-full "
            : ""
        }
        ${
          (selectedFinishDate && d.isSame(selectedFinishDate, "day")) ||
          (selectedStartDate && d.isSame(selectedStartDate, "day"))
            ? "bg-[#4BECE2] w-[33px] h-[38px] rounded"
            : ""
        }
         `}
            >
              {convertToPersian(d.jDate())}
            </Text>
          </Button>
        );
      })}
    </>
  );
};

export default DatePickerCard;
