import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-400 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-300 focus:text-stone-700 hover:text-stone-700 focus:outline-none focus:ring focus:bg-stone-300 focus:ring-stone-300 focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3.5 disabled:cursor-not-allowed",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;