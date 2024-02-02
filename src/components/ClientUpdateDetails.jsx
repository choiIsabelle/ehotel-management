import React from 'react';
import { Grid, Card } from './CustomComponents';
import { CondensedInput } from './CondensedInput';

//TODO: finish this for the client view of updating their personal information or payment information

export const ClientUpdateDetails=()=>{
    return(
        <Grid>
            <Card>
<CondensedInput
title={"Update your payment details"}
subMsg={"Search for your account using your SSN"}
>
</CondensedInput>
            </Card>
        </Grid>
    )
}