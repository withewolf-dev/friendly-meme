import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Editorial() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Page 3"
        description="Page 3"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">
          here we will get to read the editorial of the given month
        </Typography>
      </Container>
    </>
  );
}

export default Editorial;
