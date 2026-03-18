type Props = {
  title: string;
  number: string;
};

export default function CardStat({ title, number }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">

      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="text-3xl font-bold text-[#110767]">
        {number}
      </h3>

    </div>
  );
}