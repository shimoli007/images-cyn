import { Link } from 'react-router-dom';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2.5 font-medium rounded-full
    transition-all duration-200 cursor-pointer
    focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-slate-900 text-white
      hover:bg-slate-800
      shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-white text-slate-900
      border border-slate-200
      hover:bg-slate-50 hover:border-slate-300
      shadow-sm
    `,
    outline: `
      border border-slate-300 text-slate-700
      hover:bg-slate-50 hover:border-slate-400
    `,
    ghost: `
      text-slate-600
      hover:text-slate-900 hover:bg-slate-100
    `,
    subtle: `
      bg-slate-100 text-slate-700
      hover:bg-slate-200
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
    </>
  );

  const hoverAnimation = {
    scale: 1.01,
    transition: { duration: 0.15 }
  };

  const tapAnimation = {
    scale: 0.98,
    transition: { duration: 0.1 }
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={hoverAnimation}
          whileTap={tapAnimation}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        className="inline-block"
      >
        <Link to={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
