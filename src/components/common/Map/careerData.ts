// data/careerData.ts
export interface CareerItem {
    year: string;
    title: string;
    organization: string;
    type: 'education' | 'work';
    description: string;
    location: string;
  }
  
  const careerData: CareerItem[] = [
    {
      year: '2015',
      title: 'High School Diploma',
      organization: 'XYZ High School',
      type: 'education',
      description: 'Graduated with honors',
      location: 'City A'
    },
    {
      year: '2019',
      title: 'Bachelor\'s in Computer Science',
      organization: 'ABC University',
      type: 'education',
      description: 'Specialized in Web Development',
      location: 'City B'
    },
    {
      year: '2020',
      title: 'Junior Web Developer',
      organization: 'Tech Startup Inc.',
      type: 'work',
      description: 'Worked on frontend development using React',
      location: 'City C'
    },
    {
      year: '2022',
      title: 'Senior Web Developer',
      organization: 'Enterprise Solutions Ltd.',
      type: 'work',
      description: 'Leading a team of developers on large-scale projects',
      location: 'City D'
    },
    // Add more entries as needed
  ];
  
  export default careerData;