import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="bg-white shadow-card">
      <div className="container mx-auto px-element py-4">
        <h1 className="text-accent-deep text-h2 font-bold m-0">Mary's Kitchen</h1>
      </div>
    </header>
  );
};