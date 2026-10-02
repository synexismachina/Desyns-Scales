import { ArrowRight } from "lucide-react";
import "./Button.css";

export default function Button({
  children,
  href,
  onClick,
  variant = "solid", // solid | outline | ghost
  icon = true,
  as,
  ...rest
}) {
  const className = `btn btn--${variant}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={16} strokeWidth={2} className="btn__icon" aria-hidden="true" />}
    </>
  );

  if (as === "button" || onClick) {
    return (
      <button className={className} onClick={onClick} {...rest}>
        {content}
      </button>
    );
  }

  return (
    <a className={className} href={href} {...rest}>
      {content}
    </a>
  );
}
