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

const dateFormat = "jYYYY/jMM/jDD";
const outputFormat = (date: moment.Moment): string =>
  convertToPersian(Number(date.format(dateFormat)));

const monthAndDayFormat = (date: moment.Moment): string =>
  `${convertToPersian(date.jDate())} ${months[date.jMonth()]}`;

const DatePickerCard: React.FC<DatePickerCardProps> = ({
  onSelectFinishDate,
  onSelectStartDate,
  onClose,
  visible,
}) => {
  const [selectedFinishDate, setSelectedFinishDate] = useState(
    moment().format(dateFormat)
  );
  const currentFinishDate = moment(selectedFinishDate, dateFormat);
  const currentStartDate = moment();
  const startOfMonth = currentFinishDate.clone().startOf("jMonth");
  const endOfMonth = currentFinishDate.clone().endOf("jMonth");
  const days: moment.Moment[] = [];

  for (let i = 0; i < startOfMonth.jDay(); i++)
    days.unshift(startOfMonth.clone().subtract(i + 1, "day"));

  for (let i = 0; i <= endOfMonth.jDate() - startOfMonth.jDate(); i++)
    days.push(startOfMonth.clone().add(i, "day"));

  for (let i = 0; days.length < totalDaysInCalendar; i++)
    days.push(endOfMonth.clone().add(i + 1, "day"));

  const timeDelta: {
    [index: string]: { label: string; value: string; date: string };
  } = {
    today: {
      label: "امروز",
      value: daysOfWeek[currentStartDate.jDay()],
      date: outputFormat(currentStartDate),
    },
    inAFewMinutes: {
      label: "کمی بعد",
      value: convertToPersian(moment().add(30, "minutes").format("HH:mm")),
      date: outputFormat(moment().add(30, "minutes")),
    },
    tomorrow: {
      label: "فردا",
      value: daysOfWeek[currentStartDate.clone().add(1, "day").jDay()],
      date: outputFormat(currentStartDate.clone().add(1, "day")),
    },
    weekend: {
      label: "این آخر هفته",
      value: daysOfWeek[currentStartDate.clone().endOf("jDay").day(5).jDay()],
      date: outputFormat(currentStartDate.clone().endOf("jDay").day(5)),
    },
    nextWeek: {
      label: "هفته‌ی آینده",
      value: daysOfWeek[currentStartDate.clone().add(1, "week").jDay()],
      date: outputFormat(currentStartDate.clone().add(1, "week")),
    },
    endOfNextWeek: {
      label: "آخرهفته‌ی آینده",
      value: monthAndDayFormat(
        currentStartDate.clone().endOf("jDay").add(1, "week").day(5)
      ),
      date: outputFormat(currentStartDate.clone().add(1, "week").day(5)),
    },
    twoWeeksLater: {
      label: "دو هفته دیگر",
      value: monthAndDayFormat(currentStartDate.clone().add(2, "week")),
      date: outputFormat(currentStartDate.clone().add(2, "week")),
    },
    fourWeeksLater: {
      label: "۴ هفته دیگر",
      value: monthAndDayFormat(currentStartDate.clone().add(4, "week")),
      date: outputFormat(currentStartDate.clone().add(4, "week")),
    },
  };

  const handlePrevMonth = () => {
    setSelectedFinishDate(
      moment(selectedFinishDate, dateFormat)
        .subtract(1, "jMonth")
        .format(dateFormat)
    );
  };
  const handleNextMonth = () => {
    setSelectedFinishDate(
      moment(selectedFinishDate, dateFormat).add(1, "jMonth").format(dateFormat)
    );
  };

  const handleFinishDateChange = (date: string) => {
    setSelectedFinishDate(date);
    onSelectFinishDate(date);
  };
  const handleStartDateChange = (date: string) => {
    onSelectStartDate(date);
  };

  if (!visible) return null;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      className="fixed inset-0 w-screen h-screen backdrop-blur-sm"
    >
      <div className=" mx-auto w-[936px] bg-white overflow-hidden h-[632px] rounded-[20px] shadow-[0_12px_32px_0_rgba(0,0,0,0.25)] ">
        <header className="flex gap-2 justify-between w-[896-px] p-10 border-b">
          <Flex alignItems="center">
            <Icon iconName="DatePickerCalendar" width={32} height={32} />
            <Text size="XL" weight="500">
              زمان شروع
            </Text>
          </Flex>
          <Flex alignItems="center" className=" border-r pr-2">
            <Icon iconName="DatePickerCalendar" width={32} height={32} />
            <Text size="XL" weight="500">
              زمان پایان
            </Text>
          </Flex>
        </header>
        <Flex className="h-full">
          <div className=" flex flex-col gap-3 h-full w-[393px] bg-[#F7F8F9] p-6">
            {Object.keys(timeDelta).map((k) => (
              <Button
                onClick={() => handleStartDateChange(timeDelta[k].date)}
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
          </div>
          <div className="grid justify-items-center w-full p-7 grid-cols-7 gap-[10px]">
            <Flex
              className="w-[202px] gap-5 my-5 justify-self-start col-span-7"
              alignItems="center"
            >
              <Text
                weight="500"
                size="L"
                className="flex w-24 whitespace-nowrap items-center"
              >
                {months[currentFinishDate.jMonth()]}{" "}
                {convertToPersian(currentFinishDate.jYear())}
              </Text>
              <Flex width="w-fit">
                <Button onClick={handlePrevMonth} asChild>
                  <Icon iconName="ChevronRight" />
                </Button>
                <Button onClick={handleNextMonth} asChild>
                  <Icon iconName="ChevronLeft" />
                </Button>
              </Flex>
              <Text weight="500" size="L">
                {currentStartDate.isSame(currentFinishDate, "day")
                  ? "امروز"
                  : convertToPersian(currentFinishDate.jDate())}
              </Text>
            </Flex>
            {daysOfWeek.map((d) => (
              <Text size="M" weight="500" color="gray">
                {d}
              </Text>
            ))}

            {days.map((d) => (
              <Button
                asChild
                onClick={() => handleFinishDateChange(d.format(dateFormat))}
              >
                <Text
                  size="L"
                  weight="500"
                  className={`w-[44px] h-[44px] py-[5px] px-[10px] flex justify-center items-center rounded-full 
                ${
                  d.format(dateFormat) === currentFinishDate.format(dateFormat)
                    ? " border border-brand-primary"
                    : ""
                } `}
                >
                  {convertToPersian(d.jDate())}
                </Text>
              </Button>
            ))}
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

export default DatePickerCard;
