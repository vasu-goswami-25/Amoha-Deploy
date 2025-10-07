export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    id: 1,
    question: 'What courses does Amoha offer?',
    answer:
      'We offer courses in programming languages, web development (frontend and backend), competitive programming, data structures and algorithms, and more.',
  },
  {
    id: 2,
    question: 'Do you provide certifications ?',
    answer:
      'Yes, upon successful completion of a course, students receive a certificate that highlights their skills and achievements.',
  },
  {
    id: 3,
    question: 'What is the duration of the courses ?',
    answer:
      'Course durations vary, typically ranging from 4 weeks to 12 weeks, depending on the topic and depth of the material.',
  },
  {
    id: 4,
    question: 'Can I access course material after the course is complete ?',
    answer:
      'Yes, access to the course material is provided to all enrolled students.',
  },
  {
    id: 5,
    question: 'How are online classes conducted ?',
    answer:
      'Online classes are conducted via live sessions and pre-recorded modules, ensuring flexibility and an interactive learning experience.',
  },
  {
    id: 6,
    question: 'What if I miss a live class ?',
    answer:
      'All live classes are recorded and uploaded for you to access anytime at your convenience.',
  },
  {
    id: 7,
    question: 'How do I enroll in a course ?',
    answer:
      'Visit our website, select the desired course, and follow the easy enrollment process. You can also contact our support team for assistance.',
  },
];
