'use client';
import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Services = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="services" {...getSectionAnimation} className="w-full mx-6">
      <h2 className="heading-secondary text-center">{title}</h2>

      <div className="space-y-3 text-start font-[20px] ml-[40px] flex justify-center">
        <div id="slideImage">
          <img
            src="https://www.car24cargo.com/wp-content/uploads/2019/11/car_transportation.jpg"
            className="w-full object-cover rounded-lg ml-5  h-[450px]"
          />
        </div>

        {skills.map(({ id, lottie, points, title }) => (
          <div className='mx-20 w-[600px]'>
            <Skill
              key={id}
              className="odd:lg:flex-row-reverse "
              lottie={lottie[isDarkMode ? "dark" : "light"]}
              // skills={softwareSkills}
              points={points}
              title={title}
              {...getSectionAnimation}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;
