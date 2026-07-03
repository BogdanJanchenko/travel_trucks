'use client';

import { useRef, MouseEvent } from 'react';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreButtonProps {
  hasMore: boolean;
  isLoading: boolean;
  onClick: () => Promise<void> | void;
}

export default function LoadMoreButton({ hasMore, isLoading, onClick }: LoadMoreButtonProps) {
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    if (isLoading) return;

    await onClick();

    setTimeout(() => {
      scrollAnchorRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 80);
  };

  if (!hasMore) return null;

  return (
    <>
      <div ref={scrollAnchorRef} className={styles.scrollAnchor} />

      <button
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        className={`${styles.btnLoadMore} ${isLoading ? styles.loading : ''}`}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </>
  );
}
