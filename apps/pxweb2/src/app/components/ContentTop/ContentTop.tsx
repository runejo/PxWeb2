import cl from 'clsx';

import { useTranslation } from 'react-i18next';
import classes from './ContentTop.module.scss';

import {
  BodyLong,
  BodyShort,
  Button,
  Heading,
  Icon,
  Link,
  PxTable,
} from '@pxweb2/pxweb2-ui';

export interface ContenetTopProps {
  pxtable: PxTable;
  staticTitle: string;
}

export function ContentTop({ pxtable, staticTitle }: ContenetTopProps) {
  const { t } = useTranslation();
  return (
    <div className={cl(classes[`content-top`])}>
      <div className={cl(classes.breadcrumbs)}>
        <div className={cl(classes[`breadcrumbs-wrapper`])}>
          <Link href="#" inline>
            <BodyLong>PxWeb 2.0</BodyLong>
          </Link>
          <Icon iconName="ChevronRight"></Icon>
          <BodyLong>{staticTitle}</BodyLong>
        </div>
      </div>
      <div className={cl(classes[`heading-information`])}>
        <Heading size="large">{pxtable.metadata.label}</Heading>
        <div className={cl(classes.information)}>
          <Button variant="secondary">Information</Button>
          {pxtable.metadata && (
            <BodyShort size="medium">
              {t('presentation_page.main_content.last_updated')}:{' '} 
              {t('date.simple_date_with_time', {
                value: new Date(pxtable.metadata.updated),
              })}{' '}
            </BodyShort>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentTop;
