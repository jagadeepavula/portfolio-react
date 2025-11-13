import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
  FiLayers,
  FiZap,
  FiEye,
  FiImage,
  FiTool
} from 'react-icons/fi';

const ProjectDetails = ({ project }) => {
  const isCodeProject = project.category === "Code";

  // Extract tech stack from the content or use predefined ones
  const getTechStack = () => {
    const techMap = {
      "1": ["JSP", "Java Servlet", "Eclipse IDE", "HTML"],
      "2": ["Figma", "UI/UX Design", "Research", "Prototyping"],
      "3": ["Adobe Illustrator", "Photoshop", "Procreate", "Vector Art"],
      "4": ["Adobe Creative Suite", "Logo Design", "Typography", "Branding"],
      "5": ["Logo Design", "Branding", "SAAS", "Color Theory"],
      "6": ["React", "JavaScript", "HTML", "CSS", "OpenWeather API"],
      "7": ["AssemblyAI API", "Java", "HttpClient", "Gson", "REST API"],
      "8": ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML"]
    };
    return techMap[project.id] || [];
  };

  // Extract metrics from project
  const getMetrics = () => {
    const metrics = {
      "3": [{ label: "Views", value: "63M", icon: <FiEye /> }],
      "1": [{ label: "Automation", value: "100%", icon: <FiZap /> }],
      "7": [{ label: "Accuracy", value: "High", icon: <FiCheckCircle /> }],
      "6": [{ label: "Real-time", value: "Yes", icon: <FiTrendingUp /> }],
    };
    return metrics[project.id] || [];
  };

  // Parse HTML content into structured sections
  const parseContent = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(project.moreDetails, 'text/html');
    const sections = [];

    let currentSection = null;

    doc.body.childNodes.forEach((node) => {
      if (node.nodeName === 'H3') {
        if (currentSection) sections.push(currentSection);
        currentSection = {
          title: node.textContent,
          content: [],
          type: 'main'
        };
      } else if (node.nodeName === 'H4') {
        if (currentSection) {
          currentSection.content.push({
            subtitle: node.textContent,
            paragraphs: []
          });
        }
      } else if (node.nodeName === 'P' && currentSection) {
        const lastItem = currentSection.content[currentSection.content.length - 1];
        if (lastItem && lastItem.subtitle) {
          lastItem.paragraphs.push(node.textContent);
        } else {
          currentSection.content.push(node.textContent);
        }
      } else if (node.nodeName === 'A' && currentSection) {
        currentSection.link = {
          url: node.href,
          text: node.textContent
        };
      }
    });

    if (currentSection) sections.push(currentSection);
    return sections;
  };

  const sections = parseContent();
  const techStack = getTechStack();
  const metrics = getMetrics();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getSectionIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('problem')) return <FiTarget className="text-2xl" />;
    if (lowerTitle.includes('solution') || lowerTitle.includes('overview')) return <FiCheckCircle className="text-2xl" />;
    if (lowerTitle.includes('technical') || lowerTitle.includes('implementation')) return <FiCode className="text-2xl" />;
    if (lowerTitle.includes('impact') || lowerTitle.includes('outcome') || lowerTitle.includes('result')) return <FiTrendingUp className="text-2xl" />;
    if (lowerTitle.includes('design') || lowerTitle.includes('creative')) return <FiImage className="text-2xl" />;
    if (lowerTitle.includes('features') || lowerTitle.includes('key')) return <FiLayers className="text-2xl" />;
    if (lowerTitle.includes('tool')) return <FiTool className="text-2xl" />;
    return <FiZap className="text-2xl" />;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-4 py-2 rounded-full text-sm font-bold ${
            isCodeProject ? 'bg-teal-500 text-black' : 'bg-purple-500 text-white'
          }`}>
            {project.category}
          </span>
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        </div>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1.5 bg-teal-50 text-customBlack rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Metrics Section */}
      {metrics.length > 0 && (
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 text-center">
              <div className="text-white text-3xl mb-2 flex justify-center">{metric.icon}</div>
              <div className="text-3xl font-bold text-white">{metric.value}</div>
              <div className="text-sm text-teal-50 font-medium">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Main Content Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700"
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="text-teal-400">
                {getSectionIcon(section.title)}
              </div>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            </div>

            {/* Section Link */}
            {section.link && (
              <a
                href={section.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-teal-500 text-black rounded-lg font-medium hover:bg-teal-400 transition-colors"
              >
                {section.link.text}
              </a>
            )}

            {/* Section Content */}
            <div className="space-y-4">
              {section.content.map((content, contentIndex) => {
                if (typeof content === 'string') {
                  return (
                    <p key={contentIndex} className="text-lg text-gray-300 leading-relaxed">
                      {content}
                    </p>
                  );
                } else if (content.subtitle) {
                  return (
                    <div key={contentIndex} className="ml-4 border-l-4 border-teal-500 pl-4 py-2">
                      <h4 className="text-xl font-semibold text-teal-400 mb-2">
                        {content.subtitle}
                      </h4>
                      {content.paragraphs.map((para, paraIndex) => (
                        <p key={paraIndex} className="text-lg text-gray-300 leading-relaxed mb-2">
                          {para}
                        </p>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Link at Bottom */}
      <motion.div variants={itemVariants} className="mt-8 flex justify-center">
        <a
          href={project.Link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-black rounded-full font-bold text-lg hover:from-teal-400 hover:to-teal-500 transition-all transform hover:scale-105"
        >
          {isCodeProject ? (
            <>
              <FiCode className="text-xl" />
              View Code
            </>
          ) : (
            <>
              <FiImage className="text-xl" />
              View Design
            </>
          )}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
