import { ComponentType, useMemo } from 'react';

export const STIcon = ({
  Icon,
  color = '#1d1d1d',
  size = { width: 24, height: 24 },
}: {
  Icon: ComponentType<{ color: string; width: number; height: number }>;
  color?: string;
  size?: { width: number; height: number } | number;
}) => {
  const _size = useMemo(
    () => (typeof size === 'number' ? { width: size, height: size } : size),
    [size],
  );

  if (Icon) {
    return <Icon color={color} {..._size} />;
  }

  return null;
};
