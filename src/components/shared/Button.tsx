import { ButtonHTMLAttributes, ReactNode, ElementType } from 'react';

interface ButtonProps<T extends ElementType = 'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  as?: T;
  href?: string;
}

export default function Button<T extends ElementType = 'button'>({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  as,
  ...props
}: ButtonProps<T> & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps<T>>) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-colors';
  
  const variants = {
    primary: 'bg-[#1C5A7D] text-white hover:bg-[#174761]',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
    outline: 'border-2 border-[#1C5A7D] text-[#1C5A7D] hover:bg-[#1C5A7D] hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const width = fullWidth ? 'w-full' : '';

  const Component = as || 'button';

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
} 