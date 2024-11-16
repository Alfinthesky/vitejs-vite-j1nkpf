import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useLanguageStore } from '@/lib/i18n/languageStore';
import { z } from 'zod';

const languageSchema = z.string().regex(/^[a-z]{2}(-[A-Z]{2})?$/);

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [showCustomLangInput, setShowCustomLangInput] = useState(false);
  const [customLang, setCustomLang] = useState('');
  const [error, setError] = useState('');
  const { addCustomLanguage } = useLanguageStore();

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem('preferredLanguage', lng);
    } catch (err) {
      console.error('Error changing language:', err);
    }
  };

  const handleAddCustomLanguage = () => {
    try {
      const validatedLang = languageSchema.parse(customLang.toLowerCase());
      addCustomLanguage(validatedLang);
      changeLanguage(validatedLang);
      setShowCustomLangInput(false);
      setCustomLang('');
      setError('');
    } catch (err) {
      setError(t('invalidLanguageCode'));
    }
  };

  return (
    <div className="card mt-8">
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-4 py-2 rounded transition-colors ${
            i18n.language === 'en' 
              ? 'bg-accent-bright text-white' 
              : 'bg-gray-light hover:bg-gray-medium hover:text-white'
          }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('fr')}
          className={`px-4 py-2 rounded transition-colors ${
            i18n.language === 'fr'
              ? 'bg-accent-bright text-white'
              : 'bg-gray-light hover:bg-gray-medium hover:text-white'
          }`}
        >
          Français
        </button>
        <button
          onClick={() => changeLanguage('nl')}
          className={`px-4 py-2 rounded transition-colors ${
            i18n.language === 'nl'
              ? 'bg-accent-bright text-white'
              : 'bg-gray-light hover:bg-gray-medium hover:text-white'
          }`}
        >
          Nederlands
        </button>
      </div>

      <div>
        <button
          onClick={() => setShowCustomLangInput(!showCustomLangInput)}
          className="text-accent-bright hover:text-accent-hover font-medium transition-colors"
        >
          {t('addLanguage')}
        </button>
        
        {showCustomLangInput && (
          <div className="mt-4 space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={customLang}
                onChange={(e) => {
                  setCustomLang(e.target.value);
                  setError('');
                }}
                placeholder={t('enterLanguageCode')}
                className="input flex-1"
              />
              <button
                onClick={handleAddCustomLanguage}
                className="btn"
              >
                {t('add')}
              </button>
            </div>
            {error && (
              <p className="text-error text-sm">{error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};