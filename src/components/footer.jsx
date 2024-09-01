function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 border-t dark:border-gray-900">
      <div className="flex items-center justify-center">
        <p className="text-sm text-gray-300 dark:text-gray-300">
          Copyright &copy; {new Date().getFullYear()} gali Boy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
