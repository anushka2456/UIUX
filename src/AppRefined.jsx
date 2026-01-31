import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Search,
  Filter,
  Activity,
  Users,
  TrendingUp,
  Heart,
  Shield,
  Info,
  ArrowUpRight,
  MapPin,
  Clock,
  ChevronDown,
} from 'lucide-react';

import RefinedBackground from './components/RefinedBackground';
import RefinedHero from './components/RefinedHero';
import RefinedCard from './components/RefinedCard';
import RefinedStatCard from './components/RefinedStatCard';
import TrendChart from './components/TrendChart';
import IndiaMap3D from './components/IndiaMap3D';
import ScrollProgress from './components/ScrollProgress';
import { transitions } from './config/design-system';

function AppRefined() {
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedDisease, setSelectedDisease] = useState("Influenza-A");
  const [searchQuery, setSearchQuery] = useState('');

  const { scrollY: scrollYMotion } = useScroll();
  const headerOpacity = useTransform(scrollYMotion, [0, 100], [0.85, 1]);

  const stats = [
    {
      label: "Total Cases",
      value: 1240500,
      change: "+2.3%",
      icon: Users,
    },
    {
      label: "Recovered",
      value: 1180200,
      change: "+5.2%",
      icon: Heart,
    },
    {
      label: "Active Cases",
      value: 45300,
      change: "-3.1%",
      icon: Activity,
    },
    {
      label: "Awareness",
      value: 82,
      change: "+8.4%",
      icon: Shield,
    }
  ];

  const resources = [
    {
      label: "Symptom Checker",
      detail: "AI-powered self-assessment",
      icon: Activity,
    },
    {
      label: "Vaccination Locator",
      detail: "Find nearest centers",
      icon: Shield,
    },
    {
      label: "Emergency Helpline",
      detail: "24/7 Support: 1075",
      icon: Heart,
    },
    {
      label: "Prevention Guide",
      detail: "WHO approved protocols",
      icon: Info,
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <RefinedBackground />
      <ScrollProgress />

      <div className="relative z-10">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ opacity: headerOpacity }}
          className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-neutral-200"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={transitions.spring}
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
                  >
                    <Activity className="text-white" size={24} strokeWidth={2.5} />
                  </motion.div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-neutral-900">
                    Vigilant Health India
                  </h1>
                  <p className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Live Intelligence
                  </p>
                </div>
              </motion.div>

              <div className="flex items-center gap-4 flex-1 max-w-2xl mx-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search states, districts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-xl py-3 pl-11 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-3 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 font-semibold text-sm text-neutral-700 flex items-center gap-2 transition-all"
                >
                  <Filter size={16} />
                  {selectedDisease}
                  <ChevronDown size={14} />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Live Updates
              </motion.button>
            </div>
          </div>
        </motion.header>

        <RefinedHero />

        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <RefinedStatCard
                key={index}
                {...stat}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="grid grid-cols-12 gap-8 mb-12">
            <RefinedCard delay={0.4} className="col-span-8 min-h-[600px]" hover={false} variant="strong">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">
                      Geographic View
                    </h2>
                    <p className="text-sm font-medium text-neutral-500">
                      Interactive state-level data
                    </p>
                  </div>
                </div>

                {hoveredState && (
                  <motion.div
                    key={hoveredState}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/20"
                  >
                    {hoveredState}
                  </motion.div>
                )}
              </div>

              <div className="h-[500px]">
                <IndiaMap3D onStateHover={setHoveredState} hoveredState={hoveredState} />
              </div>

              <div className="mt-6 flex items-center gap-6 p-4 bg-neutral-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-200 rounded border-2 border-green-500" />
                  <span className="text-xs font-semibold text-neutral-700">Low Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-200 rounded border-2 border-yellow-500" />
                  <span className="text-xs font-semibold text-neutral-700">Medium Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-200 rounded border-2 border-red-500" />
                  <span className="text-xs font-semibold text-neutral-700">High Risk</span>
                </div>
              </div>
            </RefinedCard>

            <div className="col-span-4 flex flex-col gap-6">
              <RefinedCard delay={0.5} hover={false} variant="strong">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">
                    Trend Analysis
                  </h2>
                </div>

                <div className="h-56">
                  <TrendChart />
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="text-blue-600" size={16} />
                    <span className="text-xs font-bold text-blue-700 uppercase">
                      Key Insight
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-700">
                    Recovery rates improving. Active cases down 3.1% this week.
                  </p>
                </div>
              </RefinedCard>

              <RefinedCard delay={0.6} className="flex-1" hover={false} variant="strong">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-purple-50">
                    <Info className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">
                    Resources
                  </h2>
                </div>

                <div className="space-y-2">
                  {resources.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 4, scale: 1.01 }}
                      className="w-full p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                            <item.icon size={20} strokeWidth={2} />
                          </div>
                          <div>
                            <span className="block text-sm font-semibold text-neutral-900">
                              {item.label}
                            </span>
                            <span className="block text-xs font-medium text-neutral-500">
                              {item.detail}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="text-neutral-300 group-hover:text-blue-600 transition-colors" size={18} />
                      </div>
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mt-6 p-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <Shield size={28} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold">Recovery Rate</span>
                        <span className="block text-xs opacity-90">National Average</span>
                      </div>
                    </div>
                    <span className="text-4xl font-bold">94.2%</span>
                  </div>
                </motion.div>
              </RefinedCard>
            </div>
          </div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-12 border-t border-neutral-200"
          >
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="text-blue-600" size={20} />
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                  Official Data Source
                </p>
              </div>
              <p className="text-center text-sm font-medium text-neutral-500 mb-8">
                Ministry of Health & Family Welfare, Government of India
              </p>

              <div className="flex items-center justify-center gap-8 text-neutral-400">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-xs font-medium">Last Updated: Today, 6:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={16} />
                  <span className="text-xs font-medium">Refreshes Every 6 Hours</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs font-medium text-neutral-400">
                © 2024 Vigilant Health India. Built for public health awareness.
              </p>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}

export default AppRefined;
