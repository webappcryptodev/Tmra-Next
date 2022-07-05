import { useTranslation } from 'next-i18next';
import React from 'react';
import AppWordmark from './AppWordmark';

export const RichTrans = ({ i18nKey }: { i18nKey: string }) => {
  const { t } = useTranslation();
  const raw = t(i18nKey);
  const components: JSX.Element[] = [];
  const regex = /\[\[APP_WORDMARK\]\]/g;
  let previousIndex = 0;
  let matches;
  while ((matches = regex.exec(raw)) != null) {
    // console.log('lastIndex:', regex.lastIndex);
    if (regex.lastIndex > matches[0].length) {
      components.push(
        <React.Fragment key={`i18nKey[${previousIndex}]`}>
          {raw.substring(previousIndex, regex.lastIndex - matches[0].length)}
        </React.Fragment>,
      );
    }
    components.push(<AppWordmark key={`APP_WORDMARK[${previousIndex}]`} />);
    previousIndex = regex.lastIndex;
  }
  if (previousIndex < raw.length) {
    components.push(
      <React.Fragment key={`i18nKey[${previousIndex}]`}>
        {raw.substring(previousIndex, raw.length)}
      </React.Fragment>,
    );
  }
  return <>{components}</>;
};

export default RichTrans;
