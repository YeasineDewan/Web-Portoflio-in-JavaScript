 import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { 
  Navbar as HeroNavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { ThemeSwitcher } from '../utils/ThemeSwitcher';
import { LanguageSwitcher } from '../utils/LanguageSwitcher';

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Hire Me', path: '/hire-me' },
    { name: 'Contact', path: '/contact' }
  ];
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <HeroNavbar 
      isBordered 
      isBlurred
      maxWidth="xl"
      className="bg-background/70 backdrop-blur-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <RouterLink to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-md">
              <Icon icon="lucide:shield-check" className="text-white text-xl" />
            </div>
            <p className="font-semibold text-inherit">Yeasine Dewan</p>
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.path} isActive={isActive(item.path)}>
            <Link 
              as={RouterLink} 
              to={item.path}
              color={isActive(item.path) ? "primary" : "foreground"}
              className="font-medium"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={RouterLink} 
            to="/contact" 
            color="primary" 
            variant="flat" 
            startContent={<Icon icon="lucide:message-square" />}
            className="hidden sm:flex"
          >
            Hire Me
          </Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger className="sm:hidden">
              <Button isIconOnly variant="light" radius="full">
                <Icon icon="lucide:more-vertical" className="text-lg" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Actions">
              <DropdownItem key="theme" startContent={<Icon icon="lucide:moon" />}>
                <ThemeSwitcher />
              </DropdownItem>
              <DropdownItem key="language" startContent={<Icon icon="lucide:globe" />}>
                <LanguageSwitcher />
              </DropdownItem>
              <DropdownItem key="hire" as={RouterLink} to="/contact" startContent={<Icon icon="lucide:message-square" />}>
                Hire Me
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              as={RouterLink}
              to={item.path}
              color={isActive(item.path) ? "primary" : "foreground"}
              size="lg"
              className="w-full py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};