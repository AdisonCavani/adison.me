import {
  Container,
  Group,
  Header,
  createStyles,
  ActionIcon,
  Menu
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import { IconMenu2 } from '@tabler/icons'
import { ReactNode } from 'react'
import Logo from './logo'
import { ThemeButton } from './themeButton'

const HEADER_HEIGHT = 56

const useStyles = createStyles(theme => ({
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  menu: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },
  linkExternal: {
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  },
  item: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color
    }
  },
  link: {
    display: 'block',
    cursor: 'pointer',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    },

    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color
    }
  }
}))

export type NavbarProps = {
  links: LinkProps[]
  path: string
}

type LinkProps = {
  href: string
  label: string
  icon?: ReactNode
}

const Navbar = ({ links, path }: NavbarProps) => {
  const { classes, cx } = useStyles()

  const items = links.map(link => (
    <>
      {link.href.startsWith('/') ? (
        <NextLink
          key={link.label}
          href={link.href}
          className={cx(classes.link, {
            [classes.linkActive]: path === link.href
          })}
        >
          <Group spacing="xs">
            {link.icon && <>{link.icon}</>}
            {link.label}
          </Group>
        </NextLink>
      ) : (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={cx(classes.link, classes.linkExternal, {
            [classes.linkActive]: path === link.href
          })}
        >
          <Group spacing="xs">
            {link.icon && <>{link.icon}</>}
            {link.label}
          </Group>
        </a>
      )}
    </>
  ))

  const menuItems = links.map(link => (
    <>
      {link.href.startsWith('/') ? (
        <Menu.Item
          component={NextLink}
          key={link.label}
          href={link.href}
          icon={link.icon}
          className={cx({
            [classes.item]: path === link.href
          })}
        >
          {link.label}
        </Menu.Item>
      ) : (
        <Menu.Item
          component="a"
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          icon={link.icon}
          className={classes.linkExternal}
        >
          {link.label}
        </Menu.Item>
      )}
    </>
  ))

  return (
    <Header
      height={HEADER_HEIGHT}
      style={{
        position: 'fixed',
        backdropFilter: 'blur(10px)',
        boxShadow: 'sm',
        backgroundColor: 'transparent'
      }}
    >
      <Container
        style={{
          height: HEADER_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Group>
          <Logo />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
        </Group>

        <Group spacing="xs">
          <ThemeButton />
          <div className={classes.menu}>
            <Menu shadow="md" width={200} offset={10}>
              <Menu.Target>
                <ActionIcon
                  size="lg"
                  sx={theme => ({
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0]
                  })}
                >
                  <IconMenu2 size={18} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>{menuItems}</Menu.Dropdown>
            </Menu>
          </div>
        </Group>
      </Container>
    </Header>
  )
}

export default Navbar
