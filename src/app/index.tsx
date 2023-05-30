import { Container, Stack } from '@mui/material';
import { GenerateButton } from 'features';
import { Background } from 'shared/assets';

import { withProviders } from './providers';

const App = () => {
  return (
    <Container sx={{ backgroundImage: `url(${Background})`, height: '100vh', maxWidth: { xs: '100%' } }}>
      <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <GenerateButton />
      </Stack>
    </Container>
  );
};

export default withProviders(App);
