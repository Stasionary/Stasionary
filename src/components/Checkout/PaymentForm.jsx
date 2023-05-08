import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { useState } from 'react';


export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

// import { Form, Field } from 'react-final-form';
// import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';


// export default function PaymentForm() {
//     const {
//         meta,
//         getCardImageProps,
//         getCardNumberProps,
//         getExpiryDateProps,
//         getCVCProps,
//         wrapperProps
//     } = usePaymentInputs();

//     return (
//         <Form
//             onSubmit={data => console.log(data)}
//             validate={() => {
//                 let errors = {};
//                 if (meta.erroredInputs.cardNumber) {
//                     errors.cardNumber = meta.erroredInputs.cardNumber;
//                 }
//                 if (meta.erroredInputs.expiryDate) {
//                     errors.expiryDate = meta.erroredInputs.expiryDate;
//                 }
//                 if (meta.erroredInputs.cvc) {
//                     errors.cvc = meta.erroredInputs.cvc;
//                 }
//                 return errors;
//             }}
//         >
//             {({ handleSubmit }) => (
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <PaymentInputsWrapper {...wrapperProps}>
//                             <svg {...getCardImageProps({ images })} />
//                             <Field name="cardNumber">
//                                 {({ input }) => (
//                                     <input {...getCardNumberProps({ onBlur: input.onBlur, onChange: input.onChange })} />
//                                 )}
//                             </Field>
//                             <Field name="expiryDate">
//                                 {({ input }) => (
//                                     <input {...getExpiryDateProps({ onBlur: input.onBlur, onChange: input.onChange })} />
//                                 )}
//                             </Field>
//                             <Field name="cvc">
//                                 {({ input }) => <input {...getCVCProps({ onBlur: input.onBlur, onChange: input.onChange })} />}
//                             </Field>
//                         </PaymentInputsWrapper>
//                     </div>
//                     <Button marginTop="major-2" type="submit">
//                         Submit
//                     </Button>
//                 </form>
//             )}
//         </Form>
//     );
// }
