import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Brain, Video, Share2, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import FloatingElement from '../components/FloatingElement';

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 10 }}
    className="glass-card p-6 rounded-xl relative overflow-hidden"
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <Icon className="w-8 h-8 text-purple-400" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between">
            <div className="max-w-2xl space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Unleash Your Creative Potential
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300"
              >
                Transform your ideas into compelling content with our AI-powered writing assistant. 
                Create engaging blog posts, social media content, and more with ease.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => navigate('/auth')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Start Writing Now
              </motion.button>
            </div>
            
            <div className="hidden lg:block">
              <FloatingElement />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={PenTool}
            title="Blog Writing"
            description="Create engaging blog posts with AI assistance"
          />
          <FeatureCard 
            icon={Share2}
            title="Social Media"
            description="Craft perfect LinkedIn and social media content"
          />
          <FeatureCard 
            icon={Video}
            title="Video Scripts"
            description="Generate compelling scripts for your videos"
          />
          <FeatureCard 
            icon={Brain}
            title="AI Powered"
            description="Advanced AI algorithms to enhance your writing"
          />
          <FeatureCard 
            icon={Sparkles}
            title="Smart Suggestions"
            description="Get intelligent writing recommendations"
          />
          <FeatureCard 
            icon={BookOpen}
            title="Learning Path"
            description="Improve your writing skills with personalized guidance"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;