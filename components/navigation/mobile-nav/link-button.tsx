'use client';
import { Button } from '@/components/ui/button';
import { LucideIcon, LucideProps } from 'lucide-react';

interface LinkButtonProps {
  name: string;
  href: string;
  children: React.ReactNode;
}
export const LinkButton = ({ name, href, children }: LinkButtonProps) => {
  return <Button>{children}</Button>;
};
