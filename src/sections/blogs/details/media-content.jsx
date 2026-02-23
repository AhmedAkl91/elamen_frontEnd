'use client';

import { useTranslate } from 'src/locales';

import MediaItem from './media-item';

// ----------------------------------------------------------------------
export function MediaContent({ article }) {
  // ----------------------------------------------------------------------
  const { currentLang, i18n } = useTranslate();

  // ----------------------------------------------------------------------

  //----------------------------------------------------------------------
  return <MediaItem article={article} />;
}
