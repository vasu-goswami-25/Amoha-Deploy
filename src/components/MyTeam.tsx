import { type FC } from 'react';

// Type for a team member
interface TeamMember {
  id: number;
  name: string;
  title: string;
  avatar: string;
}

// Props for MyTeam component
interface MyTeamProps {
  darkMode: boolean;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Owen Harper',
    title: 'CEO',
    avatar: 'https://placehold.co/300x300/FADBD8/333333?text=OH',
  },
  {
    id: 2,
    name: 'Isabella Reed',
    title: 'Head of Education',
    avatar: 'https://placehold.co/300x300/D6EAF8/333333?text=IR',
  },
  {
    id: 3,
    name: 'Yashika',
    title: 'Lead Instructor',
    avatar: 'https://placehold.co/300x300/E8DAEF/333333?text=Y',
  },
  {
    id: 4,
    name: 'Ethan Turner',
    title: 'Internship Coordinator',
    avatar: 'https://placehold.co/300x300/A9CCE3/333333?text=ET',
  },
];

const MyTeam: FC<MyTeamProps> = ({ darkMode }) => {
  return (
    <div className="max-w-6xl mx-auto ">
      {/* Heading Left Aligned */}
      <h2 className={`${darkMode ? "text-white" :"text-black"} text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-left`}>
        Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center hover:scale-105 transform transition duration-300 cursor-pointer"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg sm:text-xl">{member.name}</h3>
            <p
              className={`text-sm sm:text-base ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
