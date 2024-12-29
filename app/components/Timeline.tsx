interface TimelineItem {
    period: string;
    title: string;
  }
  
  const timelineItems: TimelineItem[] = [
    {
      period: "2022 - Present",
      title: "Personal psychology practice"
    },
    {
      period: "2020 - 2022",
      title: "Remote personal therapist"
    },
    {
      period: "2017 - 2020",
      title: "Therapy advisor for ABC company"
    },
    {
      period: "2012 - 2017",
      title: "School psychologist at NY high school"
    }
  ];
  
  export default function Timeline() {
    return (
      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-pink-400">{item.period}</span>
            <span className="text-gray-700">- {item.title}</span>
          </div>
        ))}
      </div>
    );
  }
