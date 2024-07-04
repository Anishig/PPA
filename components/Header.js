import { useStore } from '../store';

const Header = () => {
  const toggleTheme = useStore(state => state.toggleTheme);
  const theme = useStore(state => state.theme);

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <div className="text-xl font-bold">Logo</div>
      <button onClick={toggleTheme} className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-800">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;
