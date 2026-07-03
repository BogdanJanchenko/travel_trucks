import { ReactNode, HTMLAttributes } from 'react';
import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
