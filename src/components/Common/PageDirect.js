'use client';

import React from 'react' 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTER } from '@/app/router';
import { useTranslations } from 'next-intl';

const PageDirect = ({ pageTitle }) => {
  const t = useTranslations();
  const pathname = usePathname(); 
  const excludedRoutes = ['us']; 
  const pathSegments = pathname
    .split('/')
    .filter(Boolean) 
    .filter((segment) => !excludedRoutes.includes(segment));
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = t(`links.${segment}`) || segment; 
    return { href, label };
  });

  return (
    <div className="overly bg-10 ptb-100 tw-text-[#8C8C8C]">
      <div className="container">
        <div>
          <ul className="tw-pl-0 tw-flex tw-gap-3 tw-list-none tw-text-[#8C8C8C]">
            <li>
              <Link href={ROUTER.HOME}>{t('links.home')}</Link>
            </li>

            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <li>
                  <span>-</span>
                </li>
                <li>
                  {index === breadcrumbs.length - 1 ? (
                    <span>{breadcrumb.label}</span> 
                  ) : (
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ul>
          <h2>{pageTitle || breadcrumbs[breadcrumbs.length - 1]?.label}</h2>
        </div>
      </div>
    </div>
  );
};

export default PageDirect;
>>>>>>> 8721a86489ed1f7f7de7a46c1b3e01ae17e8b6ed
