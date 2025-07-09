// src/lib/utils/deviceType.ts
import { headers } from 'next/headers';

export async function getDeviceType() {
  const userAgent = (await headers()).get('user-agent') || '';
  console.log(userAgent, 'userAgent111');
  const isMobile = /android|iPhone|iPad|iPod|webOS|BlackBerry|Windows Phone/i.test(userAgent);

  return {
    isMobile,
    isDesktop: !isMobile,
  };
}