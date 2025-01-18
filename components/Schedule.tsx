"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Hammersmith_One } from "next/font/google";
import {
  ATTENDEE_TYPE,
  useWeddingStore,
} from "@/app/hooks/useAttendeeTypeStore";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

// The Schedule component
const FriendsContent: React.FC = () => {
  // Simple inline styles for basic styling
  const styles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: "20px",
    },
    daySection: {
      marginBottom: "20px",
    },
    dayHeader: {
      borderBottom: "2px solid #ccc",
      paddingBottom: "5px",
    },
    eventList: {
      listStyleType: "disc",
      paddingLeft: "20px",
      marginTop: "10px",
    },
    eventItem: {
      marginBottom: "5px",
    },
  };
  // Array containing the schedule details
  const schedule: ScheduleItem[] = [
    {
      day: "Saturday",
      events: [
        "(5:30pm - 9:30pm) Wedding After-party Start @ Central District Brewing",
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {schedule.map((item) => (
        <div key={item.day} style={styles.daySection}>
          <h2 style={styles.dayHeader}>{item.day}</h2>
          <ul style={styles.eventList}>
            {item.events.map((event, index) => (
              <li key={index} style={styles.eventItem}>
                {event}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

interface ScheduleItem {
  day: string;
  events: string[];
}

// The Schedule component
const FamilyContent: React.FC = () => {
  // Simple inline styles for basic styling
  const styles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: "20px",
    },
    daySection: {
      marginBottom: "20px",
    },
    dayHeader: {
      borderBottom: "2px solid #ccc",
      paddingBottom: "5px",
    },
    eventList: {
      listStyleType: "disc",
      paddingLeft: "20px",
      marginTop: "10px",
    },
    eventItem: {
      marginBottom: "5px",
    },
  };
  // Array containing the schedule details
  const schedule: ScheduleItem[] = [
    {
      day: "Friday",
      events: ["Welcome Dinner @ TBD"],
    },
    {
      day: "Saturday",
      events: [
        "(3:30pm - 5:00pm) Wedding Ceremony @ Chapel Dulcinea",
        "(5:30pm - 9:30pm) Wedding After-party Start @ Central District Brewing",
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {schedule.map((item) => (
        <div key={item.day} style={styles.daySection}>
          <h2 style={styles.dayHeader}>{item.day}</h2>
          <ul style={styles.eventList}>
            {item.events.map((event, index) => (
              <li key={index} style={styles.eventItem}>
                {event}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Content = ({ attendeeType }: { attendeeType: ATTENDEE_TYPE | null }) => {
  return attendeeType === ATTENDEE_TYPE.FAMILY ? (
    <FamilyContent />
  ) : (
    <FriendsContent />
  );
};

const MobileContent = ({
  attendeeType,
}: {
  attendeeType: ATTENDEE_TYPE | null;
}) => {
  return (
    <div className="h-full flex bg-white-primary relative">
      <div className="absolute h-full w-full z-[0]">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/schedule.jpg"
        />
      </div>
      <div className="absolute bg-white-primary/70 z-10 w-full h-full flex-1 flex flex-col px-8 gap-4 items-center justify-start pt-16">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>SCHEDULE</h3>
        <Content attendeeType={attendeeType} />
      </div>
    </div>
  );
};

const DesktopContent = ({
  attendeeType,
}: {
  attendeeType: ATTENDEE_TYPE | null;
}) => {
  return (
    <div className="h-full flex bg-white-primary">
      <div className="h-full w-1/3">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/schedule.jpg"
        />
      </div>
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>SCHEDULE</h3>
        <Content attendeeType={attendeeType} />
      </div>
    </div>
  );
};

const Schedule = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const { attendeeType } = useWeddingStore();

  return isDesktop ? (
    <DesktopContent attendeeType={attendeeType} />
  ) : (
    <MobileContent attendeeType={attendeeType} />
  );
};

export default dynamic(() => Promise.resolve(Schedule), { ssr: false });
