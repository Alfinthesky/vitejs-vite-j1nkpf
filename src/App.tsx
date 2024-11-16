import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HomePage />
        <div className="mt-8">
          <LanguageSwitcher />
        </div>
      </main>
    </div>
  );
}

export default App;