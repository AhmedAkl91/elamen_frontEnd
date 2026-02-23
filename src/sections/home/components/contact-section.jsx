'use client';

import { toast } from 'sonner';
import { useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useAddContactMutation } from 'src/redux/api/front/api-contact';

import { ContactForm } from './contact-form';
import { Iconify } from 'src/components/iconify';

export default function ContactSection({ configSetting }) {
  const { t } = useTranslate();

  const [addContact, { isSuccess, isError }] = useAddContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(t('_success_fetch'));
    }

    if (isError) {
      toast.error(t('_error_fetch'));
    }
  }, [isSuccess, isError, t]);

  const email = configSetting?.email;
  const phone = configSetting?.phone;
  const address = configSetting?.address;

  return (
    <section className="relative overflow-hidden bg-red-700 text-white" id="contact_form">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:16px_16px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left info */}
          <div>
            <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
            <div className="mt-4 h-[2px] w-20 bg-white" />

            <p className="mt-6 max-w-md text-sm leading-relaxed">{t('contact.sub.title')}</p>

            <div className="mt-10 space-y-0 text-sm  justify-start">
              {email && (
                <div className="flex  justify-start gap-x-2">
                  <span className="text-lg">
                    {' '}
                    <Iconify icon={'ic:outline-mail'} width={30} color="#fff" className="mb-3" />
                  </span>
                  <a href={`mailto:${email}`} className="hover:underline text-lg">
                    {email}
                  </a>
                </div>
              )}

              {phone && (
                <div className="flex  justify-start gap-x-2">
                  <span className="text-lg">
                    {' '}
                    <Iconify icon={'line-md:phone'} width={30} color="#fff" className="mb-3" />
                  </span>
                  <a href={`tel:${phone}`} className="hover:underline text-lg">
                    {phone}
                  </a>
                </div>
              )}
              {address && (
                <div className="flex  justify-start gap-x-2">
                  <span className="text-lg">
                    {' '}
                    <Iconify icon={'ooui:map-pin'} width={30} color="#fff" className="mb-3" />
                  </span>
                  <p className="text-lg">{address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <ContactForm addContact={addContact} />
          </div>
        </div>
      </div>

      {/* Footer */}
    </section>
  );
}
