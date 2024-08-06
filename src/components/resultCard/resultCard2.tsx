import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  value: string;
  title: string;
  count: string;
  who: string;
  text: string;
  max: string;
}
const ResultCard2 = ({ value, title, count, who, text, max }: CardProps) => {
  let inputValue = 0;
  if (Number(value) > Number(max)) {
    inputValue = Number(max);
  } else {
    inputValue = Number(value);
  }
  const calculatePercentage = (value: number, maximumValue: number) => {
    return (value / maximumValue) * 100;
  };

  const val = calculatePercentage(inputValue, Number(max));

  const condition =
    Number(value) >= Number(who) ? (
      <p className="text-lg font-bold text-green-600">Normal</p>
    ) : (
      <p className="text-lg font-bold text-yellow-600">Low</p>
    );
  // # bg-gradient-to-r from-yellow-500 from-50% to-emerald-500 to-50%
  return (
    <div className="w-full">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <h3 className="text-lg font-semibold capitalize">{title}</h3>
          <CardTitle className="text-3xl font-bold">
            {value} {count}
          </CardTitle>
          <CardDescription className="text-xs">{text}</CardDescription>
        </CardHeader>
        <CardContent className="grow">{condition}</CardContent>
        <CardFooter>
          <div className="bg-gray-200 rounded-lg w-full">
            <div className="relative h-2 flex items-center rounded-lg justify-center w-full">
              <div
                style={{
                  backgroundImage: `linear-gradient(to right, #f59e0b 50%, #10b981 50%)`,
                }}
                className="relative w-full h-full rounded-lg "
              >
                <span
                  style={{ marginLeft: `48%` }}
                  className="block w-[3%] bg-white/80"
                >
                  <span className="block w-[2px] mx-auto h-2 bg-black"></span>
                </span>
                <span
                  style={{ left: `${val}%` }}
                  className={`block h-4 w-[3px] absolute -top-1 bg-black`}
                ></span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResultCard2;
