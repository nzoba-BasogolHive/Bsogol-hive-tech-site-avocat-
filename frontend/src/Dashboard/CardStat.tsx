interface Props { title: string; number: number; }

export default function CardStat({ title, number }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-3xl font-bold text-[#110767]">{number}</h3>
    </div>
  );
}