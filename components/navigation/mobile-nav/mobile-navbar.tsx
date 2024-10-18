import { LinkButton } from '@/components/navigation/mobile-nav/link-button';
import {
  House,
  Shirt,
  Search,
  ShoppingBag,
  UserRound,
  LucideIcon,
} from 'lucide-react';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: <House />,
  },
  {
    name: 'Shop',
    href: '/shop',
    icon: <Shirt />,
  },
  {
    name: 'Search',
    href: '/search',
    icon: <Search />,
  },
  {
    name: 'Cart',
    href: '/cart',
    icon: <ShoppingBag />,
  },
  {
    name: 'Account',
    href: '/account',
    icon: <UserRound />,
  },
];

export const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 flex h-16 w-full items-center justify-evenly bg-black">
      {navigationItems.map((item, i) => (
        <LinkButton href={item.href} name={item.name} key={item.href + i}>
          {item.icon}
        </LinkButton>
      ))}
    </div>
  );
};
