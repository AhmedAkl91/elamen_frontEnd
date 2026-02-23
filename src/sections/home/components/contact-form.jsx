import { z as zod } from 'zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

import { useTranslate } from 'src/locales';

import { Form, Field } from 'src/components/hook-form';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
export function ContactForm({ addContact }) {
  // ----------------------------------------------------------------------
  const { t } = useTranslate();

  const WizardSchema = zod.object({
    email: zod
      .string()
      .min(1, { message: `${t('filed.email')} ${t('filed.required')}` })
      .email({ message: t('valid.email') }),
    name: zod.string().min(1, { message: `${t('filed.name')} ${t('filed.required')}` }),
    message: zod.string().min(1, { message: `${t('filed.message')} ${t('filed.required')}` }),
    subject: zod.string().min(1, { message: `${t('filed.subject')} ${t('filed.required')}` }),
  });

  const defaultValues = useMemo(
    () => ({
      name: '',
      email: '',
      subject: '',
      message: '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(WizardSchema),
    defaultValues,
  });
  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;
  // eslint-disable-next-line consistent-return
  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await addContact(data);
      reset(defaultValues);
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <Form methods={methods} onSubmit={onSubmit} className="">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Card
            className="  max-sm:px-0 shadow-0 bg-transparent p-5 "
            sx={{ boxShadow: '0', background: '#fff' }}
          >
            <Box
              style={{ margin: '20px 0' }}
              rowGap={1}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
              }}
            >
              <Field.Text name="name" label={t('filed.name')} required />
            </Box>
            <Box
              style={{ margin: '20px 0' }}
              rowGap={1}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <Field.Text name="email" label={t('filed.email')} required />

              <Field.Text name="subject" label={t('filed.subject')} required />
            </Box>
            <Box
              style={{ margin: '20px 0' }}
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
              }}
            >
              <Field.Text name="message" label={t('filed.message')} multiline rows={3} required />
            </Box>

            <Stack alignItems="flex-start" sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="outlined"
                // color="success"
                size="large"
                sx={{ padding: '0 30px', color: 'var(--base-1)', borderColor: 'var(--base-1)' }}
                loading={isSubmitting}
                disabled={!isDirty}
              >
                {`${t('button.send')}`}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Form>
  );
}
