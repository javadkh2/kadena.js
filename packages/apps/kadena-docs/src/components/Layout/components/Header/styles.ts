import { IconButton, styled, StyledComponent } from '@kadena/react-components';

export const HamburgerButton: StyledComponent<typeof IconButton> = styled(
  IconButton,
  {
    background: '$neutral4 !important',
    display: 'flex',
    '@md': {
      display: 'none',
    },
  },
);

export const SkipNav: StyledComponent<'a'> = styled('a', {
  position: 'absolute',
  top: '0',
  left: 0,
  background: 'red',
  padding: '$2 $4',
  zIndex: '$modal',
  color: '$neutral6',
  fontWeight: '$bold',
  transform: 'translateY(-40px)',
  transition: 'transform .1s ease-in, opacity .1s ease-in',
  opacity: 0,
  '&:focus': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const HeaderIconGroup: StyledComponent<'div'> = styled('div', {
  display: 'flex',
  gap: '$1',
  marginLeft: '$6',
});

export const HideOnMobile: StyledComponent<'div'> = styled('div', {
  display: 'none',
  '@md': {
    display: 'flex',
  },
});
