// Botón polimórfico: renderiza <button> o <a> según se pase `href`.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brown/40 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-brown text-ivory shadow-soft hover:bg-bark hover:-translate-y-0.5 hover:shadow-card",
  secondary:
    "bg-cream text-bark hover:bg-sand-soft hover:-translate-y-0.5",
  outline:
    "border border-ivory/70 text-ivory hover:bg-ivory hover:text-bark backdrop-blur-sm",
  ghost: "text-brown hover:bg-brown/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
  xl: "px-9 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
