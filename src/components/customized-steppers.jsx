import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Card from '@mui/material/Card';
// import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import { fDate2 } from 'src/utils/format-time';

import { useTranslate } from 'src/locales';
import { varAlpha } from 'src/theme/styles';
// import { AddRequest } from 'src/api/service-request';

import { Form } from 'src/components/hook-form';

// ----------------------------------------------------------------------
const STEPS = ['Master data', 'additional data'];
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: theme.vars.palette.success.main },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: theme.vars.palette.success.main },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderRadius: 1,
    borderTopWidth: 3,
    borderColor: theme.vars.palette.divider,
  },
}));
// ----------------------------------------------------------------------
export function CustomizedSteppers({ AllServices, center, lat, lng, addAppoinment }) {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslate();
  // ----------------------------------------------------------------------

  const WizardSchema = zod.object({
    email: zod
      .string()
      .min(1, { message: 'Email is required!' })
      .email({ message: 'Email must be a valid email address!' }),
    service: zod.string().min(1, { message: 'Product code is required!' }),
    mrn: zod.any(),
    segment: zod.any(),
    name: zod.string().min(1, { message: 'Name is required!' }),
    identity: zod.string().min(1, { message: 'Quantity is required!' }),
    main_contact: zod.string().min(1, { message: 'Quantity is required!' }),
    dob: zod.any(),
    service_description: zod.string().min(1, { message: 'Product code is required!' }),
    latitude: zod.any(),
    longitude: zod.any(),
  });
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const defaultValues = useMemo(
    () => ({
      alternative_contact: '',
      email: '',
      id: '',
      identity: '',
      latitude: lat || '',
      longitude: lng || '',
      main_contact: '',
      membership: '',
      mrn: '',
      name: '',
      segment: '',
      service: '',
      service_description: '',
      dob: null,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(WizardSchema),
    defaultValues,
  });
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const {
    reset,
    trigger,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const handleNext = useCallback(
    async (step) => {
      if (step) {
        const isValid = await trigger(step);
        if (isValid) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    },
    [trigger]
  );
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const handleReset = useCallback(() => {
    reset();
    setActiveStep(0);
  }, [reset]);

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const dataBirth = fDate2(data.dob);

      addAppoinment({
        dob: dataBirth,
        alternative_contact: data.alternative_contact,
        email: data.email,
        identity: data.identity,
        latitude: lat,
        longitude: lng,
        main_contact: data.main_contact,
        membership: data.membership,
        mrn: data.mrn,
        name: data.name,
        segment: data.segment,
        service: data.service,
        service_description: data.service_description,
      });
      reset(defaultValues);
    } catch (error) {
      console.error(error);
    }
  });
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  const completedStep = activeStep === STEPS.length;
  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel>{t(label)}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === STEPS.length ? (
        <>
          <Paper
            sx={{
              p: 3,
              my: 3,
              minHeight: 120,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
            }}
          >
            <Typography sx={{ my: 1 }}>All steps completed - you&apos;re finished</Typography>
          </Paper>
          <Button color="inherit" onClick={handleReset} sx={{ mr: 'auto' }}>
            Reset
          </Button>
        </>
      ) : (
        <Paper
          sx={{
            p: 3,
            my: 3,
            minHeight: 120,
          }}
        >
          <Form methods={methods} onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 12 }}>
                <Card sx={{ p: 2 }} className="pt-50 pb-100" style={{ background: '#fff' }}>
                  {!completedStep && (
                    <Box display="flex">
                      {activeStep !== 0 && (
                        <Button variant="contained" sx={{ mr: 1, mt: 5 }} onClick={handleBack}>
                          {t('_back')}
                        </Button>
                      )}
                      <Box sx={{ flex: '1 1 auto' }} />
                      {activeStep === 0 && (
                        <Button
                          variant="contained"
                          onClick={() => handleNext()}
                          disabled={!isDirty}
                        >
                          {t('_next')}
                        </Button>
                      )}
                      {activeStep === 1 && (
                        <LoadingButton
                          disabled={!isDirty}
                          type="submit"
                          sx={{ mr: 1, mt: 5 }}
                          variant="contained"
                          loading={isSubmitting}
                          className=""
                          style={{ padding: '10px 30px' }}
                        >
                          {t('_send_request')}
                        </LoadingButton>
                      )}
                    </Box>
                  )}
                </Card>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      )}
    </>
  );
}
