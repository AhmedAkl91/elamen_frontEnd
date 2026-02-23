'use client';

import { Button } from '@mui/material';

import { useTranslate } from 'src/locales';

import { useSettingsContext } from 'src/components/settings';

import { Iconify } from './iconify';

// ----------------------------------------------------------------------

export function LanguagePopover({ data = [], sx, ...other }) {
  const settings = useSettingsContext();

  const { onChangeLang, currentLang } = useTranslate();

  const renderLanguage = (value) => {
    if (value === 'en') {
      return (
        <Button
          onClick={() => {
            onChangeLang('ar');
            settings.onUpdateField('direction', currentLang.value === 'en' ? 'rtl' : 'ltr');
          }}
          xs={{
            width: '40px',
            height: '40px',
            color: '#fff',
          }}
        >
          <Iconify icon="mynaui:globe" width={25} className="text-xl text-mainColor" />
          AR
        </Button>
      );
    }
    return (
      <Button
        onClick={() => {
          onChangeLang('en');
          settings.onUpdateField('direction', settings.direction === 'rtl' ? 'ltr' : 'rtl');
        }}
        xs={{
          width: '40px',
          height: '40px',
          color: '#fff',
        }}
      >
        <Iconify icon="mynaui:globe" width={25} className="text-xl text-mainColor" />
        EN
      </Button>
    );
  };

  return <>{renderLanguage(currentLang.value)}</>;
}
