'use client';

import React from 'react'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTER } from '@/app/router';
import { useTranslations } from 'next-intl';

// Конфигурация для переопределения отображаемых имен маршрутов
const routeOverrides = {
  home: 'House',
  dashboard: 'My Account',
};

const PageDirect = ({ pageTitle, children, className }) => {
  const t = useTranslations();
  const pathname = usePathname();

  // Список маршрутов, которые не должны отображаться в хлебных крошках
  const excludedRoutes = ['us'];

  const pathSegments = pathname
    .split('/')
    .filter(Boolean)
    .filter((segment) => !excludedRoutes.includes(segment));
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = routeOverrides[segment] || t(`links.${segment}`) || segment;
    return { href, label };
  });
  
  const currentLabel =
    pageTitle ||
    breadcrumbs[breadcrumbs.length - 1]?.label ||
    t('links.default');

  return (
    <div className="overly bg-10 ptb-100 tw-text-[#8C8C8C]">
      <div className="container">
        <div>
          <ul className="tw-pl-0 tw-flex tw-gap-3 tw-list-none tw-text-[#8C8C8C]">
            <li>
              <Link href={ROUTER.HOME}>{routeOverrides['home'] || t('links.home')}</Link>
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
          <div className={`tw-flex tw-items-center ${className} `}>
            <h2>{currentLabel}</h2>
            {children && <div>{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDirect;
