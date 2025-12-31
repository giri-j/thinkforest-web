import Layout from '@/components/Layout';
import ProjectCover from '@/components/ProjectCover';
import ProjectSection from '@/components/ProjectSection';
import ProjectNavigation from '@/components/ProjectNavigation';
import { PROJECTS } from '@/constants/data';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  return (
    <Layout title="My History - 기획의 숲">
      <div className="relative">
        <ProjectNavigation />

        <header className="py-20 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-forest-main/5 text-forest-main text-[10px] font-bold tracking-widest uppercase"
          >
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-yeogiottae text-forest-text"
          >
            My History
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-forest-text/60 font-light max-w-xl mx-auto"
          >
            IT 기획부터 사업 전략까지, <br />
            기획자로서 걸어온 다양한 프로젝트의 궤적입니다.
          </motion.p>
        </header>

        <ProjectCover />

        <div className="space-y-0">
          {PROJECTS.map((project) => (
            <ProjectSection
              key={project.id}
              id={project.id}
              heading={project.heading}
              image={project.image}
              title={project.title}
              description={project.description}
              role={project.role}
              year={project.year}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

