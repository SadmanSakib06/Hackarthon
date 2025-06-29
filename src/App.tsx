import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ResearchGuide from './pages/ResearchGuide';
import ExploreDatasets from './pages/ExploreDatasets';
import ExplorePapers from './pages/ExplorePapers';
import SavedLibrary from './pages/SavedLibrary';
import AutoSummary from './pages/AutoSummary';
import PlanResearch from './pages/PlanResearch';
import DiscussionForum from './pages/DiscussionForum';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/guide" element={<ResearchGuide />} />
          <Route path="/datasets" element={<ExploreDatasets />} />
          <Route path="/papers" element={<ExplorePapers />} />
          <Route path="/library" element={<SavedLibrary />} />
          <Route path="/summary" element={<AutoSummary />} />
          <Route path="/plan" element={<PlanResearch />} />
          <Route path="/forum" element={<DiscussionForum />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;