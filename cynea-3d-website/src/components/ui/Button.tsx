import { Link } from 'react-router-dom';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
    inline-flex items-center justify-center gap-2 font-semibold rounded-lg
    transition-all duration-300 cursor-pointer
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: 'bg-gold text-navy hover:bg-gold-light shadow-md hover:shadow-lg',
    secondary: 'bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    ghost: 'text-navy hover:bg-navy/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="w-5 h-5">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="w-5 h-5">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
