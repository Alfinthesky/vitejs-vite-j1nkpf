import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto p-element">
      <div className="card text-center">
        <h2 className="text-h2 text-accent-deep mb-8">
          {t('welcomeMessage')}
        </h2>
        
        <div className="space-y-6">
          <button
            className="btn w-full sm:w-auto"
            onClick={() => {/* Sera implémenté plus tard */}}
          >
            {t('login')}
          </button>
          
          <div className="flex justify-center">
            <button
              className="text-accent-bright hover:text-accent-hover font-medium transition-colors"
              onClick={() => {/* Sera implémenté plus tard */}}
            >
              {t('createAccount')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};