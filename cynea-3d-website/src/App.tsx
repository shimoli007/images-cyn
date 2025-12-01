import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '@/components/layout/Layout';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const UseCases = lazy(() => import('@/pages/UseCases'));
const Resources = lazy(() => import('@/pages/Resources'));

// Products pages
const AIAutomation = lazy(() => import('@/pages/products/AIAutomation'));
const BlockchainCompliance = lazy(() => import('@/pages/products/BlockchainCompliance'));
const DigitalFinance = lazy(() => import('@/pages/products/DigitalFinance'));
const DataAnalytics = lazy(() => import('@/pages/products/DataAnalytics'));

// Training pages
const CareerGrowth = lazy(() => import('@/pages/training/CareerGrowth'));
const CorporateTraining = lazy(() => import('@/pages/training/CorporateTraining'));
const GovernmentTraining = lazy(() => import('@/pages/training/GovernmentTraining'));

// Impact pages
const TalentHub = lazy(() => import('@/pages/impact/TalentHub'));
const AIForGood = lazy(() => import('@/pages/impact/AIForGood'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/resources" element={<Resources />} />

            {/* Products pages */}
            <Route path="/products/ai-automation" element={<AIAutomation />} />
            <Route path="/products/blockchain-compliance" element={<BlockchainCompliance />} />
            <Route path="/products/digital-finance" element={<DigitalFinance />} />
            <Route path="/products/data-analytics" element={<DataAnalytics />} />

            {/* Training pages */}
            <Route path="/training/career-growth" element={<CareerGrowth />} />
            <Route path="/training/corporate" element={<CorporateTraining />} />
            <Route path="/training/government" element={<GovernmentTraining />} />

            {/* Impact pages */}
            <Route path="/impact/talent-hub" element={<TalentHub />} />
            <Route path="/impact/ai-for-good" element={<AIForGood />} />

            {/* 404 fallback - redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
