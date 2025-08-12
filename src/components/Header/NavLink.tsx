import { keyframes, styled } from 'styled-components';

interface NavLinkProps {
  link: string;
  label: string;
}

export default function NavLink(props: NavLinkProps) {
  return (
    <Link href={props.link}>
      {props.label}
    </Link>
  );
}

const Link = styled.a`
  --size: 44px;
  width: 100%;
  display: inline-block;
  position: relative;
  height: var(--size);
  line-height: var(--size);
  text-decoration: none;
  text-align: center;
  color: var(--color-white);
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.25rem;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--color-white);
    height: 2px;
    width: var(--size);
    bottom: 0;
    left: 0;
    opacity: 0.3;
    transition: all 700ms;
    transform: rotate(-90deg);
    transform-origin: 0% 0%;
  }

    &:hover:before {
      opacity: 1;
      @media(prefers-reduced-motion: no-preference){
        left: 35%;
        transform: rotate(0deg);
        transform-origin: 0 0;
        transition: all 300ms;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-white);
    height: 2px;
    width: var(--size);
    bottom: 0;
    right: 0;
    opacity: 0.3;
    transition: all 700ms;
    transform: rotate(90deg);
    transform-origin: 100% 0%;
  }
  &:hover:after {
    opacity: 1;
    @media(prefers-reduced-motion: no-preference){
      right: 35%;
      transform: rotate(0deg);
      transform-origin: 100% 100%;
      transition: all 300ms;
    }
  }
`;
