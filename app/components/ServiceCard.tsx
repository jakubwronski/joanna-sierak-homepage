import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const htmlString = description;
  const theObj = {__html:htmlString};
 //#b197a5
 //#c4b5aa
 //#c4b3bb
  return (
    <div className="p-6 bg-[#36767a] rounded-lg shadow-sm">
      <div className="w-12 h-12 mb-4 text-pink-700">
        <Image
          src={`/icons/${icon}.svg`}
          alt={title}
          width={48}
          height={48}
          className="text-pink-700 [&>path]:fill-pink-700"
        />
      </div>
      <h3 className="text-xl font-medium mb-2 text-white">{title}</h3>
      <p className="text-white whitespace-pre-line" dangerouslySetInnerHTML={theObj}></p>
    </div>
  );
}
